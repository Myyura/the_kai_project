---
sidebar_label: "2018年8月実施 専門科目 第1問"
tags:
  - Tokyo-University
  - Probability-Statistics.Descriptive-Statistics-and-Sampling.Measurement-Scales-and-Summary-Statistics
  - Probability-Statistics.Probability-Basics.Conditional-Density
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Mathematics.Calculus.Beta-Function
  - Mathematics.Calculus.Gamma-Function
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Memoryless-Property
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Central-Limit-Theorem
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Type-II-Error-Interpretation
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Adjusted-R-Squared
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2018年8月実施 専門科目 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 題意の要約

[公式問題 PDF](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2019/06/f774c2437f9325b07575786cce17f10a.pdf)

1. 転移個数を「0個・1個・2個以上」に分類した変数の尺度。
2. 原図の右裾の長いヒストグラムで最頻値・中央値・平均を比較する（PDF p.2）。
3. $X\sim N(50,100)$ の $P(X\le60)$。
4. $X=(-5,-3,-1,1,3,5)$、$Y=(13,-2,-11,-11,-2,13)$ の相関。
5. 6人に A, B を各3人ずつ割り付け、最初の3人が A となる確率。
6. サイコロの同時分布で $X=2$ の行が $(.02,.08,.03,.03,.01,.01)$。$P(Y=1\mid X=2)$。
7. 当たり3本を含む10本を無復元で引き、2番目が当たりとなる確率。
8. $\log[p/(1-p)]$ の微分。
9. 正規分布の MGF $e^{\mu t+\sigma^2t^2/2}$ の微分。
10. 密度 $cx^2(1-x)^2\ (0\le x\le1)$ の $c$。
11. $\int_0^\infty t^{-1/2}e^{-t}\,dt$。
12. $X\sim N(3,9),Y\sim N(2,4)$ の $E[X^2+Y^2]$。
13. 独立な $X_i\sim U[0,1]$、$n=100$ に対する $P(\bar X\ge.55)$ の近似。
14. 率0.3の指数分布の $P(T>t_2\mid T>t_1)$（$0\le t_1<t_2$）。
15. Bernoulli$(p)$ 標本平均の標準化。
16. 有意水準5%、検出力80%の検定における過誤確率。
17. 100人中30人成功した母比率の近似95%信頼区間。
18. 男性の飲酒あり/なしが132/88、女性が108/192のときの男女のオッズ比。
19. 相関0.82・$p=.002$ の Anscombe の四散布図から直線関係を判定する（PDF p.8）。
20. 回帰 SBP~TV の $p=.0034$、調整済み $R^2=.0007579$ を解釈する。

### 题目描述

各问选择适当选项。

1. 将转移个数分为“0个、1个、2个以上”，判断该变量的测量尺度。
2. 比较上方原题 PDF 第2页右尾较长直方图的众数、中位数与均值。
3. $X\sim N(50,100)$，求 $P(X\le60)$。
4. 求数据 $X=(-5,-3,-1,1,3,5)$、$Y=(13,-2,-11,-11,-2,13)$ 的相关系数。
5. 随机给6人分配 A、B，各3人，求前3人全部分到 A 的概率。
6. 骰子联合分布中 $X=2$ 这一行为 $(.02,.08,.03,.03,.01,.01)$，求 $P(Y=1\mid X=2)$。
7. 10根签中3根中奖，无放回抽签，求第2根中奖的概率。
8. 求 $\log[p/(1-p)]$ 的导数。
9. 求正态矩母函数 $e^{\mu t+\sigma^2t^2/2}$ 的导数。
10. 密度为 $cx^2(1-x)^2$（$0\le x\le1$），求 $c$。
11. 计算 $\int_0^\infty t^{-1/2}e^{-t}\,dt$。
12. $X\sim N(3,9),Y\sim N(2,4)$，求 $E[X^2+Y^2]$。
13. $X_i$ 独立且服从 $U[0,1]$，$n=100$，近似求 $P(\bar X\ge.55)$。
14. 对率参数为0.3的指数分布，求 $P(T>t_2\mid T>t_1)$，其中 $0\le t_1<t_2$。
15. 将 Bernoulli$(p)$ 样本均值标准化。
16. 显著性水平5%、检验功效80%，判断错误概率。
17. 100人中30人成功，求总体比例的近似95%置信区间。
18. 男性饮酒与不饮酒人数为132与88，女性为108与192，求男女优势比。
19. 根据原题 PDF 第8页相关系数均为0.82、$p=.002$ 的四幅 Anscombe 散点图，判断线性关系。
20. 回归 SBP~TV 得到 $p=.0034$、调整后 $R^2=.0007579$，解释结果。

## **Kai**
### (1-1)
イ. 順序尺度

### (1-2)
イ. 最頻値，中央値，平均値

### (1-3)
オ. 84%

$Z=(X-50)/10$ より $P(X\le60)=\Phi(1)\simeq0.8413$。

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
ウ. 4%

$E[X_i]=1/2$、$V(X_i)=1/12$ より、中心極限定理で

$$
P(\bar X\ge0.55)\simeq1-\Phi\!\left(\frac{0.55-0.5}{\sqrt{1/1200}}\right)
=1-\Phi(\sqrt3)\simeq0.0416.
$$

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
ウ. 直線的な関係を相関係数が適切に表しているのは (a)。

(b) は曲線的、(c) は外れ値、(d) は離れた一点の影響が大きい。同じ相関係数と $p$ 値でも、散布図の形状は一致しない。

### (1-20)
エ. Adjusted R-squared が 0.0007579 なので、TV により SBP の変動は十分説明されない。
