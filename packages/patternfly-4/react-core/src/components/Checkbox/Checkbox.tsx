import * as React from 'react';
import styles from '@patternfly/patternfly/components/Check/check.css';
import { css, getModifier } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';

export interface CheckboxProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'> {
  className?: string;
  isValid?: boolean;
  isDisabled?: boolean;
  isChecked?: boolean;
  checked?: boolean;
  onChange?(checked: boolean, event: React.FormEvent<HTMLInputElement>): void;
  label?: React.ReactNode;
  id: string;
  'aria-label': string;
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  className = '',
  isValid = true,
  isDisabled = false,
  isChecked = null,
  checked = null,
  onChange = () => undefined,
  label = undefined,
  'aria-label': ariaLabel = '',
  ...props
}) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.onChange(event.currentTarget.checked, event);
  };

  return (
    <div className={css(styles.check, className)}>
      <input
        {...props}
        className={css(styles.checkInput)}
        type="checkbox"
        onChange={handleChange}
        aria-invalid={!isValid}
        disabled={isDisabled}
        checked={isChecked || checked}
      />
      {label && (
        <label className={css(styles.checkLabel, getModifier(styles, isDisabled && 'disabled'))} htmlFor={props.id}>
          {label}
        </label>
      )}
    </div>
  );
};
