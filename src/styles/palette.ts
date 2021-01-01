const palette = {
    breakingPoint: {
        xs: '0px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
    },
    grey: ['#FFFFFF', '#F8F8F8', '#f0f0f0', '#cccccc', '#9d9d9d', '#888', '#666666', '#4a4a4a', '#222222', '#e6e6e6'],
    yellow: ['#feb902'],
};

export const device = {
    mobile: `(min-width: ${palette.breakingPoint.xs})`,
    tablet: `(min-width: ${palette.breakingPoint.sm})`,
    laptop: `(min-width: ${palette.breakingPoint.md})`,
    desktop: `(min-width: ${palette.breakingPoint.lg})`,
};

export default palette;
