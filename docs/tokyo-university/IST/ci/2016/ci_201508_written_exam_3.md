---
sidebar_label: '2015年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2015年8月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
写実的な画像をコンピュータグラフィックスで生成する場合、輝度の計算を幾何光学に基づいた積分で行なうことが多い。今、ある平面上の点において角度 $(\theta, \phi)$ から（図 1 を参照）入射する光の放射輝度を $L(\theta, \phi)$ とするとき、その点における放射照度 $I$ は、

$$
I = \int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} L(\theta, \phi) \cos \theta \sin \theta \, d\theta d\phi
$$

と定義されることが知られている。以下の設問に答えよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_3_p1.png" width="450" alt=""/>
</figure>
図1

(1) 放射輝度 $L$ の分布が $\theta$ に依存しない状況を考える。この場合、放射照度 $I$ が

$$
I = \frac{1}{2} \int_{0}^{2\pi} L(\phi) d\phi
$$

という一次元の定積分で表せることを示せ。なお、以下のすべての設問でこの状況を考える。

(2) $\phi_i = 2\pi(i/N) \ (i=0, ..., N)$ と定義される $N+1$ 個の値を考える。図 2 は $[\phi_i, \phi_{i+1}]$ 間に定義される長方形の面積が $L(\phi_i)(\phi_{i+1} - \phi_i)$ で与えられることを示している。この事を利用し放射照度 $I$ の近似値の式を総和記号 $\Sigma$ を用いて書け。この手法は一般に長方形近似と呼ばれる。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_3_p2.png" width="450" alt=""/>
</figure>
図2

(3) 一般に、$[0, 2\pi]$で定義される確率密度関数 $p(\phi)$ (ただし $p(\phi) > 0$ とする) に従って分布する確率変数 $\phi$ が与えられたとき、あるスカラー関数 $f(\phi)$ の期待値 $\mathrm{E}[f(\phi)]$ は

$$
\mathrm{E}[f(\phi)] = \int_{0}^{2\pi} f(\phi) p(\phi) d\phi
$$

と定義される。今 $\phi_i$ を $p(\phi)$ に従って生成した $N$ 個の乱数の値であるとする ($\phi_i \sim p(\phi), i = 1, ..., N$)。このとき、上記の期待値 $\mathrm{E}[f(\phi)]$ の近似が

$$
\mathrm{E}[f(\phi)] \cong \frac{1}{N} \sum_{i=1}^{N} f(\phi_i)
$$

と与えられることを利用して、放射照度 $I$ の近似値を総和記号 $\Sigma$ を用いて書け。この手法は一般にモンテカルロ積分と呼ばれる。

(4) 長方形近似の誤差と、モンテカルロ積分の誤差の期待値を考える。被積分関数 $L(\phi)$ (ただし $L(\phi) > 0$ とする) がどのような場合に、それぞれの手法の誤差がゼロとなるか答えよ。設問(2)および設問(3)の解を踏まえて説明すること。なお、長方形近似については $L(\phi)$ が図 2 のような階段状の関数となる自明な場合は除く。

(5) 長方形近似もしくはモンテカルロ積分を 32 ビットの浮動小数点数を用いて実装したところ、$N$ がある大きな数を超えた時点で、結果がゼロに向かって下がり始めた。この現象について考えられる原因を一つ説明せよ。$N$ は常に正確にカウントされていると仮定すること。

## **Description (English)**

When generating photorealistic images in computer graphics, radiance calculations are often performed using integrals based on geometric optics. Now, let $L(\theta, \phi)$ be the radiance of light incident from an angle $(\theta, \phi)$ (see Figure 1) at a point on a plane. It is known that the irradiance $I$ at that point is defined as:

$$
I = \int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} L(\theta, \phi) \cos \theta \sin \theta \, d\theta d\phi
$$

Answer the following questions.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_3_p1.png" width="450" alt=""/>
</figure>
Figure 1

(1) Consider a situation where the distribution of radiance $L$ does not depend on $\theta$. Show that in this case, the irradiance $I$ can be expressed as the following one-dimensional definite integral:

$$
I = \frac{1}{2} \int_{0}^{2\pi} L(\phi) d\phi
$$

Note that this situation is considered in all subsequent questions.

(2) Consider $N+1$ values defined as $\phi_i = 2\pi(i/N) \ (i=0, ..., N)$. Figure 2 shows that the area of the rectangle defined in the interval $[\phi_i, \phi_{i+1}]$ is given by $L(\phi_i)(\phi_{i+1} - \phi_i)$. Using this fact, write the formula for the approximate value of irradiance $I$ using the summation symbol $\Sigma$. This method is generally called rectangular approximation.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_3_p2.png" width="450" alt=""/>
</figure>
Figure 2

(3) In general, given a random variable $\phi$ distributed according to a probability density function $p(\phi)$ (where $p(\phi) > 0$) defined on $[0, 2\pi]$, the expected value $\mathrm{E}[f(\phi)]$ of a scalar function $f(\phi)$ is defined as:

$$
\mathrm{E}[f(\phi)] = \int_{0}^{2\pi} f(\phi) p(\phi) d\phi
$$

Now, assume that $\phi_i$ are $N$ random values generated according to $p(\phi)$ ($\phi_i \sim p(\phi), i = 1, ..., N$). At this time, using the fact that the approximation of the above expected value $\mathrm{E}[f(\phi)]$ is given as

$$
\mathrm{E}[f(\phi)] \cong \frac{1}{N} \sum_{i=1}^{N} f(\phi_i)
$$

write the approximate value of irradiance $I$ using the summation symbol $\Sigma$. This method is generally called Monte Carlo integration.

(4) Consider the error of the rectangular approximation and the expected value of the error of the Monte Carlo integration. Answer in what cases the error of each method becomes zero for the integrand $L(\phi)$ (assuming $L(\phi) > 0$). Explain based on the solutions to question (2) and question (3). Note that for the rectangular approximation, trivial cases where $L(\phi)$ becomes a step-like function as in Figure 2 are excluded.

(5) When the rectangular approximation or Monte Carlo integration was implemented using 32-bit floating-point numbers, the result started to drop towards zero at the point when $N$ exceeded a certain large number. Explain one possible cause for this phenomenon. Assume that $N$ is always counted correctly.