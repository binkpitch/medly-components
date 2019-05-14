import { WithStyle } from '@medly-components/utils';
import React from 'react';
import { TextStyled } from './Text.styled';
import { Props } from './types';

const Text: React.FunctionComponent<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const componentType = props.textWeight === 'Strong' ? 'strong' : 'span';
        return (
            <TextStyled {...props} as={componentType} ref={ref}>
                {props.children}
            </TextStyled>
        );
    })
);

Text.defaultProps = {
    lineThrough: false,
    uppercase: false
};
Text.displayName = 'Text';
Text.Style = TextStyled;

export default Text;
