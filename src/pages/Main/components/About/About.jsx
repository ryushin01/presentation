const About = () => {
  return (
    <section className="flex flex-col min-h-screen relative py-40 bg-[url('/images/about/profile.jpg')] bg-no-repeat bg-cover bg-right-center before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-grayscaleE/80">
      <div className="relative z-20 max-w-screen-2xl w-full mx-auto px-4 flex-1 flex flex-col justify-center gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl lg:text-6xl">
            박요진의 포트폴리오 사이트입니다.
          </h2>
          <h3 className="text-sm lg:text-lg text-grayscaleB/50">
            재사용 가능하고 유지 보수가 쉬운 소스 코드 개발을 선호합니다.
          </h3>
        </div>
        <ul className="flex gap-4">
          <li>
            <a href="mailto:syon9419@gmail.com">
              <img
                src="/solid/images/contact/gmail.svg"
                alt="gmail"
                className="w-10 h-10"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/syon013"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/solid/images/contact/github.svg"
                alt="github"
                className="w-10 h-10"
              />
            </a>
          </li>
          <li>
            <a
              href="https://velog.io/@syon013/posts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/solid/images/contact/velog.svg"
                alt="velog"
                className="w-10 h-10"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
