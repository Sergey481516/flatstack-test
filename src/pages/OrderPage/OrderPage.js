import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ORDER_FORM_ID } from './OrderForm/OrderForm';
import { fetchData } from '../../actions/fetch';

import Breadcrumbs from '../../components/Breadcrumbs';
import OrderForm from './OrderForm/OrderForm';
import OrderSummary from './OrderSummary/OrderSummary';
import OrderSuccess from './OrderSuccess';

import { FormStageId } from './constants';

import cn from 'classnames';
import get from 'lodash.get';
import Api from '../../api';
import { getCartItemsSelector } from '../../selectors/cart';
import { resetCart } from '../../actions/cart';
import isEmpty from 'lodash.isempty';

const breadcrumbItems = [
  {
    id: FormStageId.SHIPPING,
    label: 'Shipping',
  },
  {
    id: FormStageId.BILLING,
    label: 'Billing',
  },
  {
    id: FormStageId.PAYMENT,
    label: 'Payment',
  },
];

function OrderPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItemsSelector());
  const pageToPrintRef = useRef(null);

  const [activeId, setActiveId] = useState(FormStageId.SHIPPING);
  const [isOrderSuccess, setOrderSuccess] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [countries, setCountries] = useState([]);

  const onSubmit = (values) => {
    dispatch(
      fetchData({
        id: ORDER_FORM_ID,
        url: Api.SEND_ORDER_FORM,
        options: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        },
        onSuccess: (data) => {
          setOrderData(data);
          setOrderSuccess(true);
          dispatch(resetCart());
        },
        onError: (e) => {
          // TODO типа есть endpoint
          const data = {
            estimatedDate: 'Friday 1st April 2016',
            orderNumber: 188787788,
          };

          setOrderData(data);
          setOrderSuccess(true);
          dispatch(resetCart());
        },
      })
    );
  };

  const handleDetectCountry = (value, onSuccess, onError) => {
    if (!isEmpty(value)) {
      dispatch(
        fetchData({
          url: Api.GET_ADDRESS_BY_GEOCODE,
          mappingOptions: {
            coords: value,
          },
          onSuccess,
          onError,
        })
      );
    }
  };

  const getCountries = useCallback(() => {
    dispatch(
      fetchData({
        id: 'countries',
        url: Api.GET_COUNTRIES,
        onSuccess: setCountries,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <div ref={pageToPrintRef} className="order-page">
      <div
        className={cn({
          'order-page__form': !isOrderSuccess,
          'order-page__success': isOrderSuccess,
        })}
      >
        {!isOrderSuccess ? (
          [
            <Breadcrumbs
              key="breadcrumbs"
              items={breadcrumbItems}
              activeId={activeId}
              onClick={setActiveId}
            />,
            <OrderForm
              key="orderForm"
              onSubmit={onSubmit}
              activeId={activeId}
              handleChangeStage={setActiveId}
              handleDetectCountry={handleDetectCountry}
              countries={countries}
            />,
          ]
        ) : (
          <OrderSuccess
            pageToPrintRef={get(pageToPrintRef, 'current', null)}
            {...orderData}
          />
        )}
      </div>
      <div
        className={cn('order-page__summary', {
          'order-page__summary--translucent': isOrderSuccess,
        })}
      >
        <OrderSummary cartItems={cartItems} />
      </div>
    </div>
  );
}

export default OrderPage;
