import { css, styled } from '@medly-components/utils';

export const Label = styled('label')<{ required: boolean; isPrefixPresent: any }>`
    top: 0;
    left: 0;
    cursor: text;
    position: absolute;
    margin-left: ${({ isPrefixPresent }) => (isPrefixPresent ? '5.6rem' : '1.6rem')};
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 1.6rem;
    line-height: 2.6rem;
    transform-origin: 0 0;
    touch-action: manipulation;
    transform: translate3d(0, 58%, 0);

    ${({ required }) =>
        required &&
        css`
            ::after {
                content: ' *';
            }
        `}
`;