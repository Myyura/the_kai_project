---
sidebar_label: "2019年8月実施 午前 数理B"
tags:
  - TITech
---
# 東京工業大学 工学院 経営工学系 2019年8月実施 午前 数理B

:::danger[留学警示（商务部公告2026年第12号）]

根据中华人民共和国商务部公告2026年第12号，东京科学大学（東京科学大学/Institute of Science Tokyo）已被列入关注名单。请中国留学申请者慎重考虑相关风险，在做出留学决定前充分了解相关政策及其可能带来的影响。

:::

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### \[1\]

### \[2\]
#### (1)
##### (a)
$(Z-E(Z))^2$ は非負の値をとる確率変数であるから、
与えられた不等式において、
$X=(Z-E(Z))^2, b=c$ とおくと、

$$
\begin{aligned}
P \left( (Z-E(Z))^2 \geq c \right)
&\leq \frac{E \left( (Z-E(Z))^2 \right)}{c}
\\
&= \frac{V(Z)}{c}
\end{aligned}
$$

を得る。

#### (b)
(a) で示した不等式を使って、次のように示せる：

$$
\begin{aligned}
P \left( | X-E(X) | \geq a \right)
&=
P \left( ( X-E(X) )^2 \geq a^2 \right)
\\
&\leq \frac{V(X)}{a^2}
\end{aligned}
$$

#### (2)

#### (3)
##### (a)

$$
  \begin{aligned}
  E(X) &= \frac{n}{2}
  \\
  V(X) &= \frac{n}{4}
  \end{aligned}
$$

##### (b)

$$
  \begin{aligned}
  P \left( X \geq \frac{3n}{4} \right)
  &=
  P \left( X - \frac{n}{2} \geq \frac{n}{4} \right)
  \\
  &=
  \frac{1}{2} P \left( \left| X - \frac{n}{2} \right|
  \geq \frac{n}{4} \right)
  \\
  &\leq
  \frac{1}{2} \frac{\frac{n}{4}}{\left( \frac{n}{4} \right)^2} 
  \ \ \ \ \ \ \ \ 
  ( \because (1)(b) )
  \\
  &=
  \frac{2}{n}
  \end{aligned}
$$