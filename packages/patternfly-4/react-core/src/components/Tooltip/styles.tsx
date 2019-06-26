import { injectGlobal } from 'emotion';

export const tippyStyles = () => {
  // Need to unset tippy default styles
  // Also for enableFlip, need to make arrow aware of parent x-placement attribute in order to work
  // export const overrides = StyleSheet.parse(
  injectGlobal(`
  .pf-tippy {
    &.tippy-tooltip {
      background-color: unset;
      font-size: unset;
      color: unset;
      border-radius: unset;
      -webkit-font-smoothing: unset;
      text-align: unset;
      padding: unset;
    }
    .pf-c-tooltip, .pf-c-popover {
      max-width: unset;
    }
    .pf-c-tooltip, .pf-c-popover:focus {
      outline: none;
    }
  }
  .tippy-popper {
    line-height: unset !important;
  }
  .tippy-popper[x-placement^=top] .pf-c-tooltip__arrow {
    bottom: 0;
    left: 50%;
    transform: var(--pf-c-tooltip__arrow--m-top--Transform);
  }
  .tippy-popper[x-placement^=bottom] .pf-c-tooltip__arrow {
    top: 0;
    left: 50%;
    transform: var(--pf-c-tooltip__arrow--m-bottom--Transform);
  }
  .tippy-popper[x-placement^=left] .pf-c-tooltip__arrow {
    top: 50%;
    right: 0;
    transform: var(--pf-c-tooltip__arrow--m-left--Transform);
  }
  .tippy-popper[x-placement^=right] .pf-c-tooltip__arrow {
    top: 50%;
    left: 0;
    transform: var(--pf-c-tooltip__arrow--m-right--Transform);
  }
  .tippy-popper[x-placement^=top] .pf-c-popover__arrow {
    bottom: 0;
    left: 50%;
    transform: var(--pf-c-popover__arrow--m-top--Transform);
  }
  .tippy-popper[x-placement^=bottom] .pf-c-popover__arrow {
    top: 0;
    left: 50%;
    transform: var(--pf-c-popover__arrow--m-bottom--Transform);
  }
  .tippy-popper[x-placement^=left] .pf-c-popover__arrow {
    top: 50%;
    right: 0;
    transform: var(--pf-c-popover__arrow--m-left--Transform);
  }
  .tippy-popper[x-placement^=right] .pf-c-popover__arrow {
    top: 50%;
    left: 0;
    transform: var(--pf-c-popover__arrow--m-right--Transform);
  }
`);
};
