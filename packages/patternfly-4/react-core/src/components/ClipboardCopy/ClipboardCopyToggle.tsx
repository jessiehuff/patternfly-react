import * as React from 'react';
import styles from '@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';

export interface ClipboardCopyToggleProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /** Function that is called when clicking on the toggle button */
  onClick: (event: React.MouseEvent) => void; 
  id: string; 
  textId: string; 
  contentId: string; 
  isExpanded?: boolean; 
  /** Additional classes added to the toggle button */
  className?: string; 
}

export const ClipboardCopyToggle: React.FunctionComponent<ClipboardCopyToggleProps> = ({
  onClick, 
  className = '',
  id, 
  textId, 
  contentId,
  isExpanded = false, 
  ...props
}: ClipboardCopyToggleProps) => {
  return (
  <button
      onClick={onClick}
      className={css(styles.clipboardCopyGroupToggle, className)}
      id={id}
      aria-labelledby={`${id} ${textId}`}
      aria-controls={`${contentId}`}
      aria-expanded={isExpanded}
      {...props}
    >
      <AngleRightIcon aria-hidden="true" className={css(styles.clipboardCopyGroupToggleIcon)} />
    </button>
  )
};