---
sidebar_label: "2025年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2025年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura


## **Description**

ある工場で生産している製品はまず2個のモジュールA, Bを別々に製造した後、これら2個を組み立てて最終的に製品が完成する。モジュールAとBを製造するためにかかる時間はそれぞれ $X_A, X_B$ (単位: 時間)であり、これらの確率密度関数は

$$
f_{X_A}(x_A) = \alpha e^{-\alpha x_A} \quad (x_A > 0), \quad f_{X_B}(x_B) = \beta e^{-\beta x_B} \quad (x_B > 0)
$$

で与えられている。また、製造されたモジュールAとBを組み立てて製品を完成させるために要する時間 $Y$ の確率密度関数は

$$
g_Y(y) = \gamma^2 y e^{-\gamma y} \quad (y > 0)
$$

である。 $X_A, X_B, Y$ は全て独立で、2個のモジュールの製造を同時に開始し、両方の製造が終了するまで組み立てを開始することはできない。モジュールの製造が終了したらすぐに組み立てを開始し、モジュールの製造完了から組み立て開始までの間の時間はゼロと見なすことができる。このとき、以下の問いに答えよ。

(1) モジュールAとBの2個の製造を同時に開始してから2個の製造が完了するまでに要する時間 $W$ の確率分布を必要な文字を用いて表せ。

(2) $E[X_A] = E[X_B] = E[Y] = 2$ のとき、 $\alpha, \beta, \gamma$ の値を求めよ。

(3) (2)で求めた $\alpha, \beta, \gamma$ の下、2個のモジュールの製造を同時に開始してからこれらを組み立てて製品が完成するまでの時間 $T$ の確率密度関数を示せ。

### 题目描述

某工厂生产一种产品：先分别制造模块 A、B，再将两个模块组装成最终产品。制造模块 A、B 所需时间分别为 $X_A,X_B$（单位：小时），其概率密度函数为

$$
f_{X_A}(x_A)=\alpha e^{-\alpha x_A}\qquad(x_A>0),
$$

$$
f_{X_B}(x_B)=\beta e^{-\beta x_B}\qquad(x_B>0).
$$

将制成的模块 A、B 组装成产品所需时间 $Y$ 的概率密度函数为

$$
g_Y(y)=\gamma^2y e^{-\gamma y}\qquad(y>0).
$$

$X_A,X_B,Y$ 相互独立。两个模块同时开始制造，只有二者都制造完毕后才能开始组装；两个模块均完成后立即组装，制造完成与开始组装之间的等待时间视为零。回答下列问题。

（1）设 $W$ 为从两个模块同时开始制造到两个模块均制造完成所需的时间，用必要的参数表示 $W$ 的概率分布。

（2）当

$$
E[X_A]=E[X_B]=E[Y]=2
$$

时，求 $\alpha,\beta,\gamma$。

（3）使用（2）求得的 $\alpha,\beta,\gamma$，设 $T$ 为从两个模块同时开始制造到组装完成、最终产品制成所需的总时间，求 $T$ 的概率密度函数。

## **Kai**

以下の (1) の分布関数・密度は $w\le0$ では $0$ とする。また、(3) の密度の計算は $t>0$ に対するものであり、 $t\le0$ では $f_T(t)=0$ である。

(1) $W = \max(X_A, X_B)$ である。 $W \le w$ となるのは $X_A \le w$ かつ $X_B \le w$ のときであるから、 $W$ の累積分布関数は

$$
\begin{aligned} F_W(w) &= P(W \le w) = P(X_A \le w, X_B \le w) \\ &= P(X_A \le w) P(X_B \le w) \quad (X_A, X_B \text{ は独立}) \\ &= (1 - e^{-\alpha w})(1 - e^{-\beta w}) \quad (w > 0) \end{aligned}
$$

よって、 $W$ の確率密度関数は

$$
f_W(w) = \frac{d}{dw} F_W(w) = \alpha e^{-\alpha w}(1 - e^{-\beta w}) + \beta e^{-\beta w}(1 - e^{-\alpha w}) = \alpha e^{-\alpha w} + \beta e^{-\beta w} - (\alpha + \beta)e^{-(\alpha + \beta)w} \quad (w > 0)
$$

(2) $E[X_A] = \int_0^{\infty} x_A \alpha e^{-\alpha x_A} dx_A = \frac{1}{\alpha} = 2$ より、 $\alpha = \frac{1}{2}$ である。

同様に、 $E[X_B] = \frac{1}{\beta} = 2$ より、 $\beta = \frac{1}{2}$ である。

$E[Y] = \int_0^{\infty} y \gamma^2 y e^{-\gamma y} dy = \frac{2}{\gamma} = 2$ より、 $\gamma = 1$ である。

(3) $T = W + Y$ である。 $W$ と $Y$ は独立であるから、 $T$ の確率密度関数は

$$
f_T(t) = \int_0^t f_W(w) g_Y(t - w) dw
$$

ここで、 $\alpha = \beta = \frac{1}{2}, \gamma = 1$ より、

$$
f_W(w) = \frac{1}{2} e^{-\frac{1}{2}w} + \frac{1}{2} e^{-\frac{1}{2}w} - e^{-w} = e^{-\frac{1}{2}w} - e^{-w} \quad (w > 0)
$$

$$
g_Y(y) = y e^{-y} \quad (y > 0)
$$

よって、

$$
\begin{aligned} f_T(t) &= \int_0^t (e^{-\frac{1}{2}w} - e^{-w}) (t - w) e^{-(t - w)} dw \\ &= \int_0^t e^{-\frac{1}{2}w} (t - w) e^{-(t - w)} dw - \int_0^t e^{-w} (t - w) e^{-(t - w)} dw \\ &= e^{-t} \int_0^t (t - w) e^{\frac{1}{2}w} dw - e^{-t} \int_0^t (t - w) dw \\ &= e^{-t} \left[ 2(t-w)e^{\frac{1}{2}w} \Big|_0^t + 2 \int_0^t e^{\frac{1}{2}w} dw \right] - e^{-t} \left[ tw - \frac{1}{2}w^2 \Big|_0^t \right] \\ &= e^{-t} \left[ -2te^0 + 4e^{\frac{1}{2}w} \Big|_0^t \right] - e^{-t} \left[ t^2 - \frac{1}{2}t^2 \right] \\ &= e^{-t} \left[ -2t + 4(e^{\frac{1}{2}t} - 1) \right] - e^{-t} \left[ \frac{1}{2}t^2 \right] \\ &= (- \frac{1}{2}t^2 - 2t - 4)e^{-t} + 4e^{-\frac{1}{2}t} \end{aligned}
$$

$\int (t-w)e^{w/2}dw = (t-w)2e^{w/2} - \int (-1)2e^{w/2}dw = 2(t-w)e^{w/2} + 4e^{w/2}$
$f_T(t) = e^{-t}(-2t+4e^{t/2}-4) - e^{-t}(t^2/2)$
$f_T(t) = e^{-t}(4e^{t/2}-(t^2/2)-2t-4)$
