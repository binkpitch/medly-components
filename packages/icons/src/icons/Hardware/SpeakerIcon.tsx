import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SpeakerIconSvg from '../../assets/Hardware/speaker_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpeakerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SpeakerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SpeakerIcon.Style = SvgIcon;
SpeakerIcon.displayName = 'SpeakerIcon';

export default SpeakerIcon