import './MyLabel.css'

export interface Props {
    /**
     * Label to display
     */
    label: string;

    /**
     * Size of the label
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Whether to display the label in all caps
     */
    allCaps?: boolean;

    /**
     * Color of the label
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

    /**
     * Font color of the label
     */ 
    fontColor?: string;

}

export const MyLabel = ({ label, size = 'normal', allCaps = false , color, fontColor }: Props) => {
  return (
    <span className={`${ size } ${ color }`}
          style={{ color: fontColor }} >
        { allCaps ? label.toUpperCase() : label } 
    </span>
  )
}
