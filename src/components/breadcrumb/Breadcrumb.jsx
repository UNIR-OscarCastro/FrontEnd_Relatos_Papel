import { Breadcrumb as BSBreadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <BSBreadcrumb className="mb-3">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <BSBreadcrumb.Item
            key={index}
            active={isLast}
            linkAs={isLast ? "span" : Link}
            linkProps={isLast ? {} : { to: item.to }}
          >
            {item.label}
          </BSBreadcrumb.Item>
        );
      })}
    </BSBreadcrumb>
  );
};

export default Breadcrumb;

