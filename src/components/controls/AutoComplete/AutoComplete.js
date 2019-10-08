import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactAutoComplete from 'react-autocomplete';

import cn from 'classnames';

const shouldItemRender = (item, value) =>
  !!~item.label.toLowerCase().indexOf(value.toLowerCase());

function AutoComplete({
  className,
  labelFieldId,
  items,
  placeholder,
  ...rest
}) {
  const [open, setOpen] = useState(false);

  const getInputProps = () => ({
    className: 'autocomplete__input',
    placeholder: !open ? placeholder : '',
  });
  const onSelect = (value) => rest.onChange(value);

  return (
    <div
      className={cn('autocomplete', className, {
        'autocomplete--active': open,
      })}
    >
      <ReactAutoComplete
        inputProps={getInputProps()}
        getItemValue={(item) => item[labelFieldId]}
        shouldItemRender={shouldItemRender}
        items={items}
        onMenuVisibilityChange={setOpen}
        renderMenu={(items) => (
          <div className="autocomplete__menu" children={items} />
        )}
        renderItem={(item, isHighlighted) => (
          <div
            className={cn('autocomplete__item', {
              'autocomplete__item--active': isHighlighted,
            })}
          >
            {item.label}
          </div>
        )}
        {...rest}
        onSelect={onSelect}
      />
    </div>
  );
}

AutoComplete.propTypes = {
  className: PropTypes.string,
  labelFieldId: PropTypes.string,
  items: PropTypes.array,
};

AutoComplete.defaultProps = {
  labelFieldId: 'label',
  items: [],
};

export default AutoComplete;
