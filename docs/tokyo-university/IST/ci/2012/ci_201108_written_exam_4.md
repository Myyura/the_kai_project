---
sidebar_label: '2011年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Explanation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2011年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) フィードバック制御とフィードフォワード制御
2) カルマンフィルタ
3) 画像処理に於けるエッジ抽出法（具体例を２つ挙げて説明すること）
4) モンテカルロ法
5) ニューラルネットワークの学習方法（具体例を１つ挙げて説明すること）
6) パイプラインハザード（具体例を２つ挙げて説明すること）
7) マイクロプログラム制御
8) クライアントサーバーシステムと P2P システムの利害得失

## **Description (English)**
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) Feedback control and feedforward control
2) Kalman filter
3) Edge detection methods in image processing (Explain with two examples)
4) Monte Carlo method
5) Learning methods of neural networks (Explain with one example)
6) Pipeline hazards (Explain with two examples)
7) Microprogram (microcode) control
8) Merits and demerits of client-server systems and P2P systems

## **Kai**

#### Kalman filter
Kalman filter is an optimal recursive algorithm giving a better estimate based on noisy sensored data and uncertain predicted data. It dynamically balances the uncertainty of the model against the noise of measurements, providing the optimal estimate in real-time systems.

At step $t$, Kalman filter uses the physical model to predict current state by state transition and control matrix & vector, getting a predicted current state; and uses the covariance at $t-1$ step to predict the current covariance matrix. Then, it updates (posterior estimates) the state and the covariance by computed Kalman gain.
