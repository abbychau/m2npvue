<template>
  <div class="about">
        <h1>Kiyomi - a snow-white SNS</h1>
        <h2>What is Kiyomi</h2>
        <p>
            Kiyomi is a brand new SNS run by Abby Chau(<a target="_blank" href="https://www.facebook.com/zkizabby">FB</a> / <a target="_blank" href="https://twitter.com/abbychau">TW</a> / <a target="_blank" href="https://github.com/abbychau">GH</a>),
            who is too sensitive to how unfairness (e.g. echo chambers) is generated on SNSs.
        </p>
        <h3>Kiyomi</h3>


        <ol>
            <li>supports importing of your Facebook and/or Twitter timeline</li>
            <li>supports strict timescale</li>
            <li>provides super-fine layering timeline display options(e.g. image-less, nameless, action filters)</li>
            <li>is not a trivial/non-scalable feed stream system that would die because of architecture designs</li>
            <li>encourages high density of information instead of deceptive stream reading</li>
            <li>provides an extra decent javascript-less layout for slow / private communications (e.g. Tor Network)</li>
            <li>is centralized because decentralized platform like Disapora or Mastodon are scarifying simplicity and thus making people unlinked between two federations.</li>
            <li>has high avaliability of data export API and data stream API for your own client development(need application) or data backup</li>
            <li>has a premium plan and serves the paid user first; nothing is perfect, without money, so I am planning to let someone to pay for most people's freedom</li>
        </ol>
        (This list may change.)

        <h3>Kiyomi</h3>
        <ol>
            <li>支持Facebook 和Twitter 時間線的匯入</li>
            <li>支持嚴格時序TL</li>
            <li>多樣化的TL展示(e.g. image-less, nameless, action filters)</li>
            <li>重視可擴展性(scalablility)，確保時間線不因架構問題不能持久開發</li>
            <li>鼓勵高密度信息而非具感官欺騙性的流式瀏覽</li>
            <li>包含無JS 而美觀的桌面版本以供隱密優先或載入速度優先的情況（例如Tor Network）</li>
            <li>是集中的(像FB/TW) ，因為像 Disapora 或者 Mastodon 的分散式平台太複雜而且有機會讓不用聯幫的人斷連</li>
            <li>提供高可用的信息匯出和信息流API，以供第三方APP 開發(要申請)和個人備份</li>
            <li>提供付費計劃，並為付費用戶提供優先服務。我讓少部份的人為大部份的人的自由付費</li>
        </ol>
        (列表可能有變)

        <h2>Apply for whitelist</h2>
        <p>Apply for the whitelist list, I will notify you when there is an early access.</p>
        <form method="post">
            <input type="email" name="email" placeholder="E-Mail Address" style='display:inline;width:200px;' />
            <input type="submit" value="Notify me" style='display:inline;margin-left:-5px' />
        </form>





        <h2>Exporting Facebook</h2>
        <p>
        Export your Facebook archive(choose JSON format and medium media quality).
        </p>
        <img src="/images/screen1.png" style='width:80%;;margin-bottom:3px' /><br />
        Check if the archive can be unzipped correctly(Facebook's export program hits bugs frequently).<br />
        And Keep your archive in a safe place.


        <h2>Why called Kiyomi</h2>
            Kiyomi is a Japanese female name, written as 清雪. I hope this platform will be as pure as snow while also forming variable fractal layers like snow crystals.

        <h2>Facebook Importer</h2>
        <p>
        Intended import omission:
        <ol>

            <li>Other People's posts on your timeline</li>
            <li>Cover Photo of note</li>
            <li>The Items you sell on Facebook groups.</li>
            <li>Attachments > 10MB.</li>

        </ol>
        </p>

  </div>
</template>
