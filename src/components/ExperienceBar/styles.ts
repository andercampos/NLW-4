import styled from 'styled-components';

interface Props {
  progress: string;
}

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
  }
`;

export const ProgressBar = styled.div<Props>`
  width: ${({ progress }): string => progress};
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

export const CurrentExperience = styled.span<Props>`
  left: ${({ progress }) => progress};
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;