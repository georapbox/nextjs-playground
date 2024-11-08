type Props = {
  data: {
    title: string;
    link: string;
  }[];
};

export const Resources = (props: Props) => {
  const { data } = props;

  return (
    <>
      <h2 className="text-lg font-semibold">Resources</h2>

      <ul className="list-disc list-inside">
        {data.map((item, index) => {
          const { title, link } = item;

          return (
            <li key={index}>
              <a href={link} target="_blank" className="underline">
                {title}
              </a>
            </li>
          );
        })}
      </ul>

      <hr className="my-5 border-gray-300 dark:border-gray-600" />
    </>
  );
};
