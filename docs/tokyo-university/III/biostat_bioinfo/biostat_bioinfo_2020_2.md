---
sidebar_label: "2020年度 専門科目 第2問"
sidebar_position: 1
tags:
  - Tokyo-University
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2020年度 専門科目 第2問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (2-1)

$$
\begin{aligned}
E[X_1]
&= \int_{- \infty}^\infty x f(x; \gamma) dx
\\
&= \frac{1}{\gamma} \int_0^\infty x e^{- x / \gamma } dx
\\
&= - \int_0^\infty x \left( e^{- x / \gamma } \right)' dx
\\
&= - \left[ x e^{- x / \gamma } \right]_0^\infty
+ \int_0^\infty e^{- x / \gamma } dx
\\
&= - \gamma \left[ e^{- x / \gamma } \right]_0^\infty
\\
&= \gamma
\end{aligned}
$$

### (2-2)

$$
\begin{aligned}
P \left( X_{(1)} \leq x \right)
&=
1 - P \left( X_{(1)} \gt x \right)
\\
&=
1 - P \left( X_1 \gt x \text{ and }
X_2 \gt x \text{ and } \cdots \text{ and } X_n \gt x \right)
\\
&=
1 - P ( X_1 \gt x ) P ( X_2 \gt x ) \cdots P ( X_n \gt x )
\\
&=
1 -
\left( \frac{1}{\gamma} \int_x^\infty e^{ - y / \gamma } dy \right)^n
\\
&=
1 -
\left( - \left[ e^{ - y / \gamma } \right]_x^\infty \right)^n
\\
&=
1 - \left( e^{ - x / \gamma } \right)^n
\\
&=
1 - e^{ - nx / \gamma }
\end{aligned}
$$

であるから、

$$
\begin{aligned}
f_{(1)}(x; \gamma)
&= \frac{d}{dx} \left( 1 - e^{ - nx / \gamma } \right)
\\
&= \frac{n}{\gamma} e^{ - nx / \gamma }
\\
E[X_{(1)}]
&= \frac{\gamma}{n}
\end{aligned}
$$

### (2-3)

### (2-4)

$$
\begin{aligned}
T_n
&=
\frac{1}{n-1} \sum_{i=2}^n X_{(i)}
\\
&=
\frac{1}{n-1} \sum_{i=1}^n X_{(i)}
- \frac{1}{n-1} X_{(1)}
\\
&=
\frac{1}{n-1} \sum_{i=1}^n X_i
- \frac{1}{n-1} X_{(1)}
\end{aligned}
$$

であるから、

$$
\begin{aligned}
E[T_n]
&=
\frac{1}{n-1} \sum_{i=1}^n E[X_i]
- \frac{1}{n-1} E[X_{(1)}]
\\
&=
\frac{n \gamma}{n-1} - \frac{\gamma}{n(n-1)}
\\
&=
\left( 1 + \frac{1}{n} \right) \gamma
\end{aligned}
$$

より、

$$
\begin{aligned}
E[T_n] - \gamma
&=
\frac{1}{n} \gamma
\end{aligned}
$$