---
sidebar_label: "2023年度 [6]"
tags:
  - Ehime-University
  - Physics.Mechanics.Rotating-Frame-Coriolis-and-Centrifugal-Forces
---
# 愛媛大学 理工学研究科 理工学専攻 自然科学基盤プログラム 地球科学分野 2023年度 [6]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
質量 $M$、半径 $R$ の球形の地球を考える。万有引力定数を $G$、地球の自転角速度を $\Omega$ とする。

### 問1

地球が自転しないとして、次を求めよ。

1. 地表での重力加速度 $g$。
2. 第一宇宙速度 $v_{\mathrm I}$。
3. 地球中心から距離 $a\;(a\ge R)$ にある質量 $m$ の物体の重力ポテンシャル $U(a)$。ただし $U(\infty)=0$ とする。
4. 第二宇宙速度 $v_{\mathrm{II}}$。

### 問2

地球が角速度 $\Omega$ で自転するとして、次の問に答えよ。

1. 緯度 $\phi$ の地表にある質量 $m$ の物体にはたらく遠心力の大きさ $h$。
2. $h$ のうち、地球の引力と反対向きの分力の大きさ。
3. ロケットを東向きに打ち上げるとき、低緯度の発射地が有利な理由を述べよ。

## **Kai**

### 問1

#### (1)

$$
mg=\frac{GMm}{R^2}
$$

より

$$
\boxed{g=\frac{GM}{R^2}}.
$$

#### (2)

$$
\frac{mv_{\mathrm I}^2}{R}=mg
$$

より

$$
\boxed{v_{\mathrm I}=\sqrt{gR}=\sqrt{\frac{GM}{R}}}.
$$

#### (3)

$$
U(a)=-\int_a^\infty\frac{GMm}{r^2}\,dr
=-\frac{GMm}{a}.
$$

#### (4)

脱出限界では無限遠で運動エネルギーが $0$ だから

$$
\frac12mv_{\mathrm{II}}^2-\frac{GMm}{R}=0.
$$

したがって

$$
\boxed{v_{\mathrm{II}}=\sqrt{\frac{2GM}{R}}=\sqrt{2gR}}.
$$

### 問2

#### (1)

自転軸からの距離は $R\cos\phi$ なので

$$
\boxed{h=m\Omega^2R\cos\phi}.
$$

#### (2)

地表の法線方向の分力は

$$
\boxed{h\cos\phi=m\Omega^2R\cos^2\phi}.
$$

#### (3)

地表の東向き速度は

$$
v_0=\Omega R\cos\phi
$$

であり、低緯度ほど大きい。東向きに打ち上げればこの速度を利用でき、所要増速量と燃料を小さくできる。

## **Reference**
- [愛媛大学 地球科学分野 大学院入試](http://earth.sci.ehime-u.ac.jp/gradexam.html)
- [2023年度 公式問題 PDF](http://earth.sci.ehime-u.ac.jp/inshi/expertise/2023-1-expertise.PDF)
