import React from "react";

const newsItems = [
  { date: "2020.XX.XX", description: "デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。" },
  { date: "2020.XX.XX", description: "ＸＸ月ＸＸ日から写真集「ＸＸＸＸＸＸＸ」の販売を開始します。" },
  { date: "2019.XX.XX", description: "【イベント開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト" },
  { date: "2019.XX.XX", description: "デザイン雑誌「ＸＸＸＸＸＸ Vol.10』に掲載していただきました。" },
  { date: "2019.XX.XX", description: "【個展開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト" },
];

const News: React.FC = () => {
  return (
    <section id="news" className="wrapper">
      <h2 className="sec-title">News</h2>
      <dl>
        {newsItems.map((item, index) => (
          <div key={index}>
            <dt>{item.date}</dt>
            <dd>{item.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default News;
