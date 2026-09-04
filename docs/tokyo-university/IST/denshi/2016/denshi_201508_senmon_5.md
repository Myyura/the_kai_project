---
sidebar_label: "2015年8月実施 専門 第5問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Signal-Processing.Power-Spectrum-and-Parseval-Energy-Identity
  - Mathematics.Fourier-Analysis.Parseval-Identity
---

# 東京大学 情報理工学系研究科 電子情報学専攻 2015年8月実施 専門 第5問

## **Author**

[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766), 祭音Myyura

## **Description**

信号 $f(t)$ のフーリエ変換を $F(\omega)$ とする。ただし、$t,\omega$ はそれぞれ時刻、角周波数とする。

(1) 信号 $f(t)$ に対するフーリエ変換 $F(\omega)$ について定義を示せ。また、フーリエ変換とフーリエ級数展開の違いを説明せよ。

(2) $|F(\omega)|^2$ がパワースペクトル、すなわち角周波数 $\omega$ 成分のパワーを示すのはなぜか説明せよ。

(3) フーリエ変換におけるパーセバルの等式

$$
\int_{-\infty}^{\infty}|f(t)|^2\,dt
=k\int_{-\infty}^{\infty}|F(\omega)|^2\,d\omega,\qquad k\text{ は実定数}
$$

を証明し、$k$ を決定せよ。関数 $f(t)$ について $|f(t)|^2=f(t)\overline{f(t)}$（$\overline{f(t)}$ は $f(t)$ の共役複素数）であることと、畳み込み積分のフーリエ変換

$$
\int_{-\infty}^{\infty}f(t-\tau)g(\tau)\,d\tau
=k'\int_{-\infty}^{\infty}F(\omega)G(\omega)e^{j\omega t}\,d\omega,
\qquad j\text{ は虚数単位、 }k'\text{ は実定数}
$$

は既知として利用してもよい。$k$ を解答する際、$k'$ を含んでもよい。

(4) フーリエ変換におけるパーセバルの等式の物理的な意味を説明せよ。

### 题目描述

记信号 $f(t)$ 的傅里叶变换为 $F(\omega)$，其中 $t$ 为时间变量，$\omega$ 为角频率。

(1) 写出 $f(t)$ 的傅里叶变换 $F(\omega)$ 的定义，并说明傅里叶变换与傅里叶级数展开的区别。

(2) 解释为何 $|F(\omega)|^2$ 表示功率谱，即角频率 $\omega$ 处的功率。

(3) 推导傅里叶变换形式的帕塞瓦尔定理并确定实常数 $k$：

$$
\int_{-\infty}^{\infty}|f(t)|^2\,\mathrm dt
=k\int_{-\infty}^{\infty}|F(\omega)|^2\,\mathrm d\omega.
$$

可以使用 $|f(t)|^2=f(t)\overline{f(t)}$，其中 $\overline{f(t)}$ 是 $f(t)$ 的复共轭；也可以使用卷积积分的傅里叶表示

$$
\int_{-\infty}^{\infty}f(t-\tau)g(\tau)\,\mathrm d\tau
=k'\int_{-\infty}^{\infty}F(\omega)G(\omega)e^{j\omega t}\,\mathrm d\omega,
$$

其中 $j$ 为虚数单位，$k'$ 为实常数。求 $k$ 时可以用 $k'$ 表示答案。

(4) 说明傅里叶变换中帕塞瓦尔定理的物理意义。

## **Kai**

### (1)

$$
\boxed{F(\omega)=\int_{-\infty}^{\infty}f(t)e^{-j\omega t}\,dt},\qquad
f(t)=\frac1{2\pi}\int_{-\infty}^{\infty}F(\omega)e^{j\omega t}\,d\omega.
$$

フーリエ級数は周期信号を基本角周波数の整数倍の成分の和で表す。フーリエ変換は非周期信号を連続する角周波数の成分の積分で表す。

### (2)

$F(\omega)$ は角周波数 $\omega$ の複素振幅を表し、正弦波成分のパワーは振幅の絶対値の二乗に比例する。また、異なる周波数成分は直交するため、全体の二乗量は各成分の $|F(\omega)|^2$ の積分になる。

有限エネルギー信号では、厳密には $|F(\omega)|^2$ はエネルギースペクトル密度であり、微小帯域 $d\omega$ のエネルギーは $|F(\omega)|^2d\omega/(2\pi)$ である。

### (3)

$g(t)=\overline{f(-t)}$ とおくと、変数変換 $u=-t$ より

$$
G(\omega)=\int_{-\infty}^{\infty}\overline{f(-t)}e^{-j\omega t}\,dt
=\int_{-\infty}^{\infty}\overline{f(u)}e^{j\omega u}\,du
=\overline{F(\omega)}.
$$

畳み込みの式に $t=0$ を代入すると

$$
\int_{-\infty}^{\infty}|f(-\tau)|^2\,d\tau
=k'\int_{-\infty}^{\infty}|F(\omega)|^2\,d\omega.
$$

したがって、(1) の変換規約では

$$
\boxed{k=k'=\frac1{2\pi}}.
$$

### (4)

信号の全エネルギーは、時間領域で $|f(t)|^2$ を積分しても、周波数領域で $|F(\omega)|^2/(2\pi)$ を積分しても等しい。フーリエ変換は、全エネルギーを保ったまま信号の表現を変える。
