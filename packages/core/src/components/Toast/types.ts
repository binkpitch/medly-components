import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { Props as ButtonProps } from '../Button/types';

export type ToastVariants = 'success' | 'error' | 'info' | 'warning';

export type ToastProps = Omit<HTMLProps<HTMLDivElement>, 'id' | 'action'> & {
    /** Id of the Toast */
    id?: number;
    /** Toast purpose */
    variant: ToastVariants;
    /** Icon to be shown in the toast */
    icon?: React.SFC<any>;
    /** Toast Header */
    header?: string;
    /** Toast message */
    message?: string;
    /** Additional action if you want to add */
    action?: { label: string } & Omit<ButtonProps, 'variant' | 'size'>;
};

export type StyledProps = WithThemeProp & ToastProps;
