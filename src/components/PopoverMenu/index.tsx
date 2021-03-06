import React from 'react';
import 'tippy.js/animations/shift-away.css';
import { Placement } from 'popper.js';
import { StyledTippy, StyledPopoverMenu, Option, Divider } from './style';

type MenuItem = {
  type: 'option' | 'divider';
  label?: string | React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  disabled?: boolean;
};

interface Props {
  items: MenuItem[];
  children: React.ReactElement<any>;
  placement: Placement;
  dark?: boolean;
}

const PopoverMenu: React.FC<Props> = ({ items, placement, children }: Props) => {
  const renderOptions = () => {
    return items.map((item, i) => {
      if (item.type === 'option') {
        return (
          <Option onClick={item.onClick} danger={item.danger} disabled={item.disabled} key={i}>
            {item.label}
          </Option>
        );
      } else if (item.type === 'divider') {
        return <Divider key={i} />;
      }
    });
  };

  return (
    <StyledTippy
      content={<StyledPopoverMenu>{renderOptions()}</StyledPopoverMenu>}
      placement={placement}
      trigger="click"
      animation="shift-away"
      interactive={true}
      arrow={false}
      delay={0}
      distance={0}
    >
      {children}
    </StyledTippy>
  );
};

export default PopoverMenu;
