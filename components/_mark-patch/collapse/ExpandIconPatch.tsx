import React from 'react';

interface ExpandIconPatchProps {
  isActive?: boolean | undefined;
}

const ExpandIconPatch: React.FC<ExpandIconPatchProps> = (props: ExpandIconPatchProps) => {
  const { isActive } = props;
  return isActive ? (
    <svg
      t="1705630533627"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6071"
      id="mx_n_1705630533628"
      width="16"
      height="16"
    >
      <path d="M0 0h1024v1024H0z" fill-opacity="0" p-id="6072" fill="#86909c"></path>
      <path
        d="M563.2 355.2c-25.6-25.6-64-25.6-89.6 0l-272 272c-25.6 25.6-25.6 64 0 89.6s64 25.6 89.6 0l227.2-227.2 227.2 227.2c25.6 25.6 64 25.6 89.6 0 25.6-25.6 25.6-64 0-89.6l-272-272z"
        p-id="6073"
        fill="#86909c"
      ></path>
    </svg>
  ) : (
    <svg
      t="1705630475356"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5699"
      width="16"
      height="16"
    >
      <path d="M0 0h1024v1024H0z" fill-opacity="0" p-id="5700" fill="#86909c"></path>
      <path
        d="M563.2 716.8c-25.6 25.6-64 25.6-89.6 0l-272-272c-25.6-25.6-25.6-64 0-89.6s64-25.6 89.6 0l227.2 227.2 227.2-227.2c25.6-25.6 64-25.6 89.6 0 25.6 25.6 25.6 64 0 89.6l-272 272z"
        p-id="5701"
        fill="#86909c"
      ></path>
    </svg>
  );
};

export default ExpandIconPatch;
