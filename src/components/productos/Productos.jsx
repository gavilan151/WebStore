import { PropTypes } from "prop-types";

Productos.propTypes = {
  filtro: PropTypes.string,
};

export default function Productos({filtro}) {
  return <div>{filtro}</div>;
}
