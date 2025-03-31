---
sidebar_label: "2019年度 専門科目 第1問"
sidebar_position: 3
tags:
  - Tokyo-University
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2019年度 専門科目 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1-1)
イ. 順序尺度

### (1-2)
イ. 最頻値，中央値，平均値

### (1-3)
オ. 84%

なぜなら、ほぼ 5/6 であるから。

### (1-4)
ウ. 0

なぜなら、プロットすると、y軸に関して対称だから。

### (1-5)
ウ. 0.05

なぜなら、$\frac{1}{{}_6 C_3} = \frac{1}{20} = 0.05$

### (1-6)
ウ. 0.11

なぜなら、

$$
\begin{aligned}
P(Y=1 | X=2)
&= \frac{P(X=2 \text{ and } Y=1)}{P(X=2)}
\\
&= \frac{0.02}{0.02+0.08+0.03+0.03+0.01+0.01}
\\
&= \frac{1}{9}
\end{aligned}
$$

### (1-7)
エ. 3/10

なぜなら、

$$
\begin{aligned}
\frac{3}{10} \frac{2}{9} + \frac{7}{10} \frac{3}{9} 
= \frac{2+7}{30}
= \frac{9}{30}
= \frac{3}{10}
\end{aligned}
$$

### (1-8)
エ. 1/p + 1/(1-p)

なぜなら、

$$
\begin{aligned}
\frac{d}{dp} \log \frac{p}{1-p}
&= \frac{d}{dp} \left( \log p - \log (1-p) \right)
\\
&= \frac{1}{p} - \frac{-1}{1-p}
\\
&= \frac{1}{p} + \frac{1}{1-p}
\end{aligned}
$$

### (1-9)
エ. $(\mu + \sigma^2 t ) \exp \left( \mu t + \sigma^2 t^2 / 2 \right)$

### (1-10)
オ. 30

なぜなら、

$$
\begin{aligned}
\int_0^1 x^2 (1-x)^2 dx
&= \int_0^1 (x^4 - 2x^3 + x^2) dx
= \left[ \frac{x^5}{5} - \frac{x^4}{2} + \frac{x^3}{3} \right]_0^1
\\
&= \frac{1}{5} - \frac{1}{2} + \frac{1}{3}
= \frac{6-15+10}{30}
= \frac{1}{30}
\end{aligned}
$$

### (1-11)
ウ. $\sqrt{\pi}$

なぜなら、$x = \sqrt{t}$ とおくと、
$x^2 = t, \ 2xdx=dt$ であり、

$$
\begin{aligned}
\int_0^\infty t^{-1/2} e^{-t} dt
&= \int_0^\infty x^{-1} e^{-x^2} 2xdx
= 2 \int_0^\infty e^{-x^2} dx
= 2 \cdot \frac{\sqrt{\pi}}{2}
= \sqrt{\pi}
\end{aligned}
$$

### (1-12)
オ. 26

なぜなら、期待値と分散をそれぞれ $E, V$ で表すと、

$$
\begin{aligned}
E(X^2) &= V(X) + E(X)^2 = 9 + 3^2 = 18
\\
E(Y^2) &= V(Y) + E(Y)^2 = 4 + 2^2 = 8
\\
E(X^2+Y^2) &= E(X^2) + E(Y^2) = 18 + 8 = 26
\end{aligned}
$$

### (1-13)

### (1-14)
オ. $\exp (-0.3(t_2-t_1))$

なぜなら、 $f(t) = \lambda \exp(- \lambda t)$ とすると、

$$
\begin{aligned}
P(T \gt t)
&= 1 - \int_0^t f(s) ds
= 1 - \lambda \int_0^t e^{- \lambda s} ds
\\
&= 1 + \left[ e^{- \lambda s} \right]_0^t
= e^{- \lambda t}
\\
\therefore \ \ 
P(T \gt t_2 | T \gt t_1)
&= \frac{P(T \gt t_2)}{P(T \gt t_1)}
= \frac{e^{- \lambda t_2}}{e^{- \lambda t_1}}
= e^{- \lambda (t_2 - t_1)}
\end{aligned}
$$

### (1-15)
オ. $\left( \bar{X}_n - p \right) / \sqrt{p(1-p)/n}$

### (1-16)
オ. 対立仮説 $H_1$ が正しいとき、帰無仮説 $H_0$ が棄却されない確率は $0.2$ である。

### (1-17)
ア. (0.21, 0.39)

### (1-18)
オ. 2.67

なぜなら、

$$
\begin{aligned}
\frac{\frac{132}{88}}{\frac{108}{192}}
= \frac{132}{88} \cdot \frac{192}{108}
= 2.66 \cdots
\end{aligned}
$$

### (1-19)

### (1-20)
エ. Adjusted R-squared が 0.0007579 なので、TV により SBP の変動は十分説明されない。