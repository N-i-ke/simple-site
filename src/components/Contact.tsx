import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="wrapper">
      <h2 className="sec-title">Contact</h2>
      <form action="#" method="post">
        <dl>
          <dt>
            <label htmlFor="name">NAME</label>
          </dt>
          <dd>
            <input type="text" id="name" name="your-name" />
          </dd>
          <dt>
            <label htmlFor="email">E-mail</label>
          </dt>
          <dd>
            <input type="email" id="email" name="your-email" />
          </dd>
          <dt>
            <label htmlFor="message">MESSAGE</label>
          </dt>
          <dd>
            <textarea id="message" name="your-message"></textarea>
          </dd>
        </dl>
        <div className="button">
          <input type="submit" value="送信" />
        </div>
      </form>
    </section>
  );
};

export default Contact; // default export を追加
