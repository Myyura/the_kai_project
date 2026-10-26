---
sidebar_label: 2023年7月実施 ネットワーク
tags:
  - Osaka-University
  - Computer-Science.Networks.Carrier-Sense-Multiple-Access-with-Collision-Detection
  - Computer-Science.Networks.Hidden-Terminal-Problem-and-Request-to-Send-Clear-to-Send
---
# 大阪大学 情報科学研究科 情報工学 2023年7月実施 ネットワーク

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

**【選択問題】ネットワーク**

配点：(1) 30，(2) 30，(3-1) 30，(3-2) 35

媒体アクセス制御 (media access control, medium access control) に関する以下の各問に答えよ。

(1) 複数の端末 (terminal) が同一の伝送 (transmission) 媒体を共有する際の媒体アクセス制御の方式である CSMA (Carrier Sense Multiple Access) 方式と CSMA/CD (Collision Detection) 方式に関する以下の説明文中の空欄 (A) と空欄 (B) にあてはまる最も適切な語句を，以下の (ア)〜(エ) からそれぞれ選べ。また，空欄 (X) を適切な文で埋めよ。

- (ア) アイドル (idle) になるのを待って
- (イ) しばらく待って
- (ウ) 送信先の端末からの指示を待って
- (エ) 直ちに

CSMA 方式では，端末は，送信したいフレーム (frame) が発生すると，キャリアセンス (carrier sense) により伝送媒体の状態を確認する。伝送媒体がアイドルであれば，送信したいフレームを $\boxed{\mathrm{(A)}}$ 送信する。伝送媒体がビジー (busy) であれば $\boxed{\mathrm{(B)}}$ 再度キャリアセンスを繰り返す。CSMA/CD 方式では，さらに，端末がフレームを送信している間もキャリアセンスを行い，$\boxed{\mathrm{(X)}}$。

(2) CSMA 方式では，伝搬遅延時間 (propagation delay) が長くなると，単位時間 (unit time) あたりに衝突 (collision) なしに端末で受信されるフレーム数が減少する。その理由を説明せよ。

(3) 図1に示す無線通信 (wireless communication) 環境における媒体アクセスを考える。図1では，無線端末 (wireless terminal) 1と無線端末2は，ちょうどその中間に配置された無線端末3にフレームを送信するとし，それぞれの無線端末のフレームを受信できる距離は無線端末1と無線端末2の間の距離よりも短いものとする。以下の各小問に答えよ。

(3-1) 図1の環境において，キャリアセンスを行う媒体アクセス制御方式を用いた時に生じうる隠れ端末問題 (hidden terminal problem) を，キャリアセンスとフレーム衝突の二つの用語を用いて説明せよ。

(3-2) 図1の環境において，隠れ端末問題に対処する媒体アクセス制御の一つについて，その手順を説明せよ。

![図1：無線通信環境](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/IST/ie/2024/ie_202307_network_figure_1.png)

### 题目描述

**【选答题】网络**

分值：(1) 30，(2) 30，(3-1) 30，(3-2) 35

回答以下有关媒体访问控制 (media access control, medium access control) 的问题。

(1) 多个终端共享同一传输媒体时，可采用 CSMA（载波侦听多路访问）与 CSMA/CD（带碰撞检测的 CSMA）方式。请在以下说明中的空格 (A)、(B)，分别从 (ア) 至 (エ) 中选择最合适的词句，并用适当的句子填入 (X)。

- (ア) 等待媒体变为空闲后
- (イ) 等待一段时间后
- (ウ) 等待接收端的指示后
- (エ) 立即

在 CSMA 中，当终端产生需要发送的帧时，先通过载波侦听确认传输媒体的状态。若媒体空闲，则 $\boxed{\mathrm{(A)}}$ 发送该帧；若媒体忙碌，则 $\boxed{\mathrm{(B)}}$ 再次进行载波侦听。在 CSMA/CD 中，终端在发送帧的过程中也继续进行载波侦听，并且 $\boxed{\mathrm{(X)}}$。

(2) 在 CSMA 中，传播时延越长，终端在单位时间内无碰撞接收的帧数越少。请说明原因。

(3) 考虑图1所示无线通信环境中的媒体访问。无线终端1和2向恰好位于两者中点的终端3发送帧，能够接收到各无线终端帧的距离均小于终端1与终端2之间的距离。回答下列问题。

(3-1) 使用“载波侦听”和“帧碰撞”两个术语，说明图1环境中采用载波侦听型媒体访问控制时可能发生的隐藏终端问题。

(3-2) 说明一种在图1环境中解决隐藏终端问题的媒体访问控制方式及其步骤。

![图1：无线通信环境（圆形分别表示可接收终端1、2所发帧的范围）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/IST/ie/2024/ie_202307_network_figure_1.png)

## **Kai**

### (1)

$$
\boxed{(A)=(\text{エ})},\qquad
\boxed{(B)=(\text{イ})}.
$$

[公式問題（9ページ）](https://www.ist.osaka-u.ac.jp/files/examinees/admission/past-exam/5_Information%20engineering_2024_JA.pdf)の「ビジーなら待った後に再度キャリアセンスする」という記述に対応して、（B）は「しばらく待って」とする。媒体が空くまで検知を続け、空いた時点で即座に送信する1-persistent方式とは区別する。

（X）は次の通りである。

> 衝突を検出するとジャム信号を送信してフレーム送信を中止し、二進指数バックオフで定めたランダム時間だけ待って再送する。

### (2)

伝搬遅延が長いほど、ある端末の送信開始が他端末のキャリアセンス点へ届くまでの脆弱期間が長くなる。この間に他端末が媒体をアイドルと判断して送信を開始しやすくなり、衝突と再送が増えるため、正常受信フレーム数が減少する。

### (3)

#### (3-1)

端末1と2は互いの受信範囲外なので、一方が送信中でも他方のキャリアセンスはアイドルと判定する。両者が端末3へ同時に送信すると、端末3でフレーム衝突が生じる。

#### (3-2)

RTS/CTSを用いる。例えば端末1が端末3へRTSを送り、端末3が周囲へCTSを返す。CTSを受信した端末2はNAVを設定して送信を延期し、端末1だけがDATAを送る。端末3は受信後にACKを返す。

## **Reference**

- [大阪大学公式原題（PDF 10, 11ページ）](https://www.ist.osaka-u.ac.jp/files/examinees/admission/past-exam/5_Information%20engineering_2024_JA.pdf)
