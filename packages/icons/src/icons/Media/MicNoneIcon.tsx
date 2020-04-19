import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MicNoneIconSvg from '../../assets/Media/mic_none_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MicNoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MicNoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MicNoneIcon.Style = SvgIcon;
MicNoneIcon.displayName = 'MicNoneIcon';

export default MicNoneIcon