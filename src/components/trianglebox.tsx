import Triangle from './triangle'

const TriangleBox = () => (
    <>
        <Triangle
            animateParams={{rotate: "-45deg", x: [0, -6, 0], y: [0, -6, 0]}}
            className="zelda-botw-triangle-up absolute left-0 top-0 -mx-1"
        />
        <Triangle
            animateParams={{rotate: "45deg", x: [0, 6, 0], y: [0, -6, 0]}}
            className="zelda-botw-triangle-up absolute left-0 top-0 -mx-1"
        />
        <Triangle
            animateParams={{rotate: "45deg", x: [0, -6, 0], y: [0, 6, 0]}}
            className="zelda-botw-triangle-down absolute left-0 top-0 -mx-1"
        />
        <Triangle
            animateParams={{rotate: "-45deg", x: [0, 6, 0], y: [0, 6, 0]}}
            className="zelda-botw-triangle-down absolute left-0 top-0 -mx-1"
        />
    </>
);

export default TriangleBox;
