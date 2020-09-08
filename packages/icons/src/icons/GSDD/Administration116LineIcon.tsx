import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration116LineIconSvg from '../../assets/GSDD/Administration_116_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration116LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration116LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration116LineIcon.Style = SvgIcon;
Administration116LineIcon.displayName = 'Administration116LineIcon';

export default Administration116LineIcon