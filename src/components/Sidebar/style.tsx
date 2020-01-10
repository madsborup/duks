import styled from "styled-components";
import base from "../designSystem/base";
import { PrimaryButton } from "../designSystem/button";
import { ReactComponent as ViewIcon } from "../../assets/svg/ColumnsIcon.svg";

export const StyledSidebar = styled.div`
`;

export const SidebarSection = styled.div`
  border-top: 1px solid ${base.colors.darkBorder};

  &:first-child {
    border: 0;
  }
`;

export const SidebarSectionHeader = styled.span`
  font-size: ${base.font.size.regular};
  font-weight: 600;
  color: ${base.colors.meta};
  margin-bottom: ${base.spacing.small}px;
  border-bottom: 1px solid ${base.colors.textFaded};
  text-transform: uppercase;
  letter-spacing: ${base.font.letterSpacing.heading};
`;

export const ColumnsIcon = styled(ViewIcon)`
  margin-right: ${base.spacing.xsmall}px;
  height: 20px;
  width: 20px;
`;

export const NewTaskButton = styled(PrimaryButton)`
  width: 60%;
  margin: ${base.spacing.medium}px auto;
`;
