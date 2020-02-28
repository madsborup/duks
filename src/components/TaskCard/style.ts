import styled from "styled-components/macro";
import { rgba, tint } from "polished";
import base from "../designSystem/base";
import { ReactComponent as FlowCircle } from "../../assets/svg/FlowCircle.svg";
import { ReactComponent as CalendarIcon } from "../../assets/svg/CalendarIcon.svg";
import { ReactComponent as PriorityLowIcon } from "../../assets/svg/priority_low.svg";
import { ReactComponent as PriorityMediumIcon } from "../../assets/svg/priority_medium.svg";
import { ReactComponent as PriorityHighIcon } from "../../assets/svg/priority_high.svg";


interface Props {
  flowColor: string;
}

export const StyledTaskCard = styled.div<Props>`
  display: flex;
  margin-top: ${base.spacing.xsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
  cursor: pointer;
  border-left: 5px solid ${({ flowColor }) => rgba(flowColor, 0.8)};
  background: ${base.colors.white};
  transition: box-shadow 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  box-shadow: 1px 1px 2px 1px rgba(217, 217, 219, 0.6);

  &:hover {
    box-shadow: 0 2px 8px 4px RGBA(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const Content = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: ${base.spacing.xsmall}px;
  overflow: hidden;
`;

export const TaskTitle = styled.span<Props>`
  color: ${base.colors.text};
  font-size: ${base.font.size.h6};
  font-weight: 500;
  line-height: 1.5;
`;

export const MetaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${base.spacing.xsmall}px;
  width: 100%;
`;

export const TaskInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-weight: 500;
  line-height: 1;
`;

export const DangerLabel = styled.div`
  background: ${base.colors.viewBackground};
  border: 1px solid ${base.colors.border};
  padding: 4px 5px 2px 5px;
  height: 100%;
  font-size: 0.65rem;
  text-transform: uppercase;
  line-height: 1;
  font-weight: 700;
  color: ${base.colors.text};
  border-radius: 2px;
`;

export const PriorityLabelLow = styled(PriorityLowIcon)`
  height: 16px;
  width: 16px;
  margin-right: ${base.spacing.xsmall}px;
`;

export const PriorityLabelMedium = styled(PriorityMediumIcon)`
  height: 16px;
  width: 16px;
  margin-right: ${base.spacing.xsmall}px;
`;

export const PriorityLabelHigh = styled(PriorityHighIcon)`
  height: 16px;
  width: 16px;
  margin-right: ${base.spacing.xsmall}px;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  color: ${base.colors.textMuted};
  font-size: ${base.font.size.small};
  margin-right: ${base.spacing.xsmall}px;
`;

export const DateIcon = styled(CalendarIcon)`
  height: 15px;
  width: 15px;
  margin-right: 2px;

  path {
    stroke: ${base.colors.textMuted};
  }

  rect {
    stroke: ${base.colors.textMuted};
  }
`;

export const AssignedContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  opacity: 0.95;
  margin: 0 0 0 -${base.spacing.xsmall}px;
`;

export const AssigneeAvatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;
