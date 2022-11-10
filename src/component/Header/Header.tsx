type HeadProps = {
  title?: string;
  description?: string;
};

export const Header = ({ title = '', description = '' }: HeadProps = {}) => <div>header</div>;
