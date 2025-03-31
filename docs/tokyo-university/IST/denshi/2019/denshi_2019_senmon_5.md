---
sidebar_label: "2019年度 専門 第5問"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2019年度 専門 第5問


## **Author**
[diohabara](https://github.com/diohabara/open_inshi)

## **Description**
信号 $f(t)$ が与えられたとき, $f(t)$ を時間間隔 $t_s$ で標本化することを考える。時間間隔 $t_s$ にデルタ関数 $\delta(t)$ が並ぶ信号を単位インパルス列 $\delta_s(t)$ と呼ぶ。すなわち,

$$
\delta_s(t) = \sum_{i = -\infty}^{\infty}\delta(t - it_s)
$$

この時, $f(t)$ の標本化された信号 $f_s(t)$ は, $f_s(t) = f(t)\cdot\delta_s(t)$ と表される。

&emsp;&emsp;以下の問いに答えよ。

(1) $\delta_s(t)$ を周期 $t_s$ の周期信号と考え, フーリエ級数展開せよ。

(2) $\delta_s(t)$ のフーリエ変換 $\Delta_s(\omega)$ を求めよ。ただし $\omega_s = \frac{2\pi}{t_s}$ とせよ。

(3) $f(t)$ 並びに $f_s(t)$ のフーリエ変換をそれぞれ $F(\omega)$ と $F_s(\omega)$ とする。 $F_s(\omega)$ を $F(\omega)$ を用いて表せ。

(4) 折り返し歪 (エイリアシング) の定義を述べよ。また, (3) の結果においてどのような現象となるのか説明せよ。さらに, 折り返し歪が起きないために $F(\omega)$ が満足すべき条件を $\omega_s$ を用いて述べよ。

必要に応じて以下を使ってよい。

周期 $T$ の信号 $x(t)$ のフーリエ級数展開:

$$
\begin{aligned}
x(t) &= \sum_{i = -\infty}^{\infty}c_i e^{j\frac{2\pi it}{T}} \\
c_i &= \frac{1}{T}\int_{T_0}^{T_0 + T} x(t)e^{-j\frac{2\pi it}{T}}dt
\end{aligned}
$$

信号 $x$ のフーリエ変換 $X(\omega)$ :

$$
X(\omega) = \int_{-\infty}^{\infty}x(t)e^{-j\omega t}dt
$$

信号 $x(t) = 1$ のフーリエ変換は $2\pi\delta(\omega)$ .　

$x_1(t)$ と $x_2(t)$ の畳み込み:

$$
x_1(t)*x_2(t) = \int_{-\infty}^{\infty}x_1(t')x_2(t - t')dt'
$$

信号 $x_1(t)$ と $x_2(t)$ ののフーリエ変換をそれぞれ $X_1(\omega)$ と $X_2(\omega)$ とすると, $x_1(t)*x_2(t)$ のフーリエ変換は
, $X_1(\omega) \cdot X_2(\omega)$.

同様に $x_1(t) \cdot x_2(t)$ のフーリエ変換は $\frac{1}{2\pi}X_1(\omega) * X_2(\omega)$.

## **Kai**
### (1)
$\delta_{s}(t) = \sum_{i = -\infty}^{\infty}\delta(t - it_s)$ を $1$ 周期分 $(-\frac{t_s}{2} \le t < \frac{t_s}{2})$ 切り出して、係数を求める。問題文にもあるように係数を求める式は次の通り。

$$
c_i = \frac{1}{T}\int_{-T/2}^{T/2}f(t)e^{-j\frac{2\pi it}{T}dt}
$$

この場合、$T = t_s ,f(t) = \delta(t)$ なので、これを代入して

$$
\begin{aligned}
c_i &= \frac{1}{t_s}\int_{-t_s/2}^{t_s/2}f(t)e^{-j\frac{2\pi it}{t_s}dt} \\
&= \frac{1}{t_s} \cdot 1 = \frac{1}{t_s}
\end{aligned}
$$

よって、係数は等しく $\frac{1}{t_s}$ であり、フーリエ級数展開の結果は

$$
\delta_s(t) = \sum_{i = -\infty}^{\infty}\frac{1}{t_s}e^{j\frac{2\pi it}{t_s}}
$$

### (2)
(1) の結果をフーリエ変換の公式に代入する。ただし、積分と和の交換、フーリエ変換の公式 $(1 \rightarrow 2\pi \delta(\omega),f(t) \rightarrow e^{j\omega_0 t} \rightarrow F(\omega - \omega_0))$

$$
\begin{aligned}
\Delta_s(\omega) &= \int_{-\infty}^{\infty}\delta_s(t)e^{-j\omega t}dt \\
&= \int_{-\infty}^{\infty}\bigg\{\sum_{i = -\infty}^{\infty}\frac{1}{t_s}e^{j\frac{2\pi it}{t_s}}\bigg\} \\
&= \frac{1}{t_s}\sum_{\infty}^{\infty}\bigg\{\int_{-\infty}^{\infty}e^{-j(\omega - i\omega_s)t}\bigg\} \\
&= \frac{1}{t_s}\sum_{i = -\infty}^{\infty}2\pi\delta(\omega - i\omega_s) \\
&= \omega_s \sum_{i = -\infty}^{\infty}\delta(\omega - i\omega_s)
\end{aligned}
$$

### (3)
$f_s(t) = f(t) \cdot \delta_s(t)$ の両辺をフーリエ変換する。

下の計算では和と積分の入れ替えや、(2) で得た結論や、畳込みの定義式やフーリエ変換
を使った。

$$
\begin{aligned}
F_s(\omega) &= \frac{1}{2\pi}F(\omega) * \Delta_s(\omega) \\
&= \frac{1}{t_s}F(\omega) * \bigg(\sum_{i = -\infty}^{\infty}\delta(\omega - i\omega_s)\bigg) \\
&= \frac{1}{t_s}\sum_{i = -\infty}^{\infty}\bigg(\int_{-\infty}^{\infty}F(\omega')\delta(\omega - i\omega_s - \omega')d\omega'\bigg) \\
&= \frac{1}{t_s}\sum_{i = -\infty}^{\infty}F(\omega - i\omega_s)
\end{aligned}
$$

### (4)
- エイリアシングの定義

エイリアシングとは、サンプリングに従って信号の一部が本来の周波数とは異なる周波
数の成分として混入してしまい、波形に歪みが生じることを言う。

- (3) においてどのような減少となるの

サンプリング周波数 $\omega_s$ に対して周波数 $\omega,\omega \pm \omega_s ,\omega \pm 2\omega ,\dotsb$ の成分がすべて $F_s(\omega)$ 上の同じ点に重なってしまうため、サンプリング後の信号 $F_s(\omega)$ を見たときに $F(\omega)$ のど
この周波数由来なのか判別不可能になる。

- $F(\omega)$ が満足すべき条件 
$\omega > \frac{\omega_s}{2}$ において $F(\omega) = 0$ を満たすこと。
