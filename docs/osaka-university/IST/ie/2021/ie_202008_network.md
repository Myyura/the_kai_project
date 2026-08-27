---
sidebar_label: 2020年8月実施 ネットワーク
tags:
  - Osaka-University
  - Computer-Science.Networks.Carrier-Sense-Multiple-Access-with-Collision-Detection
  - Computer-Science.Networks.Bandwidth-Delay-Product
  - Computer-Science.Information-Theory.Binary-Symmetric-Channel
---
# 大阪大学 情報科学研究科 情報工学 2020年8月実施 ネットワーク

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

CSMA/CDを用いる同軸Ethernetを考える。

- (1-1) 端末は同軸ケーブル上の（あ）を検出しない場合だけフレームを送信する。送信中に衝突を検出すると中断して（い）を送信する。（あ）、（い）を答えよ。
- (1-2) 同軸ケーブルで接続された端末A、Bだけが存在する。帯域を $C$ bit/s、長さを $L$ m、信号伝搬速度を $V$ m/s、A、Bのフレーム長を $F_A,F_B$ bitとする。
  - (1-2-1) Aがフレーム先頭ビットを送信し始めてから、そのビットがBへ到達するまでの時間を求めよ。
  - (1-2-2) A、Bが同時に送信を開始したとき、Bが衝突を検出するために $F_B$ が満たす条件を求めよ。
- (1-3) Ethernetに最大同軸ケーブル長 $L_{\max}$ が規定される理由を、最小フレーム長 $F_{\min}$ と関連付けて説明せよ。
- (1-4) 最大長を超えてフレームを転送する際のブリッジの役割を説明せよ。
- (1-5) 再送フレーム同士の再衝突を減らす仕組みを説明せよ。

### (2)

誤り率 $\varepsilon_1,\varepsilon_2\le1/2$ の2元対称通信路を直列に接続し、中継端末は受信ビットをそのまま転送する。全体の通信路を $\Gamma$ とする。

```mermaid
flowchart LR
    A["送信記号 a"] -->|"BSC ε₁"| C["中継記号 c"]
    C -->|"BSC ε₂"| B["受信記号 b"]
```

- (2-1) $p(0\mid0),p(1\mid1),p(0\mid1),p(1\mid0)$ を求めよ。
- (2-2) $a\ne b$ のとき $p(b\mid a)\le1/2$ を示せ。
- (2-3) $\Gamma$ が2元対称通信路であることを示せ。

### 题目描述

本题前半考查Ethernet载波侦听、碰撞检测、最小帧长、网桥和二进制指数退避；后半证明两个二元对称信道串联后仍为二元对称信道。

## **Kai**

### (1)

#### (1-1)

$$
\boxed{(\text{あ})=\text{搬送波（キャリア）}},\qquad
\boxed{(\text{い})=\text{ジャム信号}}.
$$

#### (1-2-1)

先頭ビットの伝搬時間だけなので

$$
\boxed{\frac{L}{V}\ \mathrm{s}}.
$$

#### (1-2-2)

Aの信号が到着する $L/V$ 秒後までBが送信中である必要がある。よって

$$
\frac{F_B}{C}\ge\frac{L}{V},\qquad
\boxed{F_B\ge\frac{CL}{V}}.
$$

#### (1-3)

最遠端で生じた衝突を送信端が検出するには、往復伝搬時間以上送信を続ける必要がある。したがって

$$
\boxed{\frac{F_{\min}}{C}\ge\frac{2L_{\max}}{V}}
$$

を満たすよう最大長を制限する。超過すると送信終了前に衝突を検出できない場合がある。

#### (1-4)

ブリッジは一方のセグメントでフレームを受信・再生し、宛先側へ中継する。セグメントを独立した衝突ドメインに分けるため、それぞれの長さを $L_{\max}$ 以下にできる。また、MACアドレスに基づき不要なフレームをフィルタリングできる。

#### (1-5)

二進指数バックオフを用いる。第 $i$ 回目の衝突後、

$$
K\in\{0,1,\ldots,2^{\min(i,10)}-1\}
$$

から一様ランダムに選び、$K$ スロット待って再送する。衝突回数に応じて競合窓を拡大し、同時再送の確率を下げる。

### (2)

#### (2-1)

$$
\begin{aligned}
p(0\mid0)=p(1\mid1)
  &=(1-\varepsilon_1)(1-\varepsilon_2)+\varepsilon_1\varepsilon_2,\\
p(0\mid1)=p(1\mid0)
  &=\varepsilon_1(1-\varepsilon_2)+(1-\varepsilon_1)\varepsilon_2.
\end{aligned}
$$

#### (2-2)

$a\ne b$ のとき

$$
q=p(b\mid a)=\varepsilon_1+\varepsilon_2-2\varepsilon_1\varepsilon_2.
$$

ここで

$$
1-2q=(1-2\varepsilon_1)(1-2\varepsilon_2)\ge0
$$

より

$$
\boxed{p(b\mid a)=q\le\frac12}.
$$

#### (2-3)

(2-1)より

$$
p(1\mid0)=p(0\mid1)=q,\qquad p(0\mid0)=p(1\mid1)=1-q,
$$

かつ $q\le1/2$ である。よって $\Gamma$ は交差確率 $q$ の2元対称通信路である。
