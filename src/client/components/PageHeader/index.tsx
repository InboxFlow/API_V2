import { BreadcrumbContainer, BreadcrumbLink } from "@arkyn/components";
import { ReactNode } from "react";

import { PageHeaderContainer } from "./styles";

type PageHeaderArgs = {
  title: string;
  breadcrumb?: { to: string; label: string }[];
  children?: ReactNode;
  className?: string;
};

function PageHeader(args: PageHeaderArgs) {
  const { title, children, breadcrumb, className } = args;

  return (
    <PageHeaderContainer className={className}>
      <section className="header_section">
        <h1>{title}</h1>

        {breadcrumb && (
          <BreadcrumbContainer>
            {breadcrumb.map((item, index) => (
              <BreadcrumbLink to={item.to} key={index}>
                {item.label}
              </BreadcrumbLink>
            ))}
          </BreadcrumbContainer>
        )}
      </section>

      {children}
    </PageHeaderContainer>
  );
}

export { PageHeader };
