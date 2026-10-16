---
sidebar_label: "2024年8月実施 専門科目 第1問"
tags:
  - Tokyo-University
  - Probability-Statistics.Descriptive-Statistics-and-Sampling.Mean-Median-and-Quartiles
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Random-Variable-Transformation
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Correlation-Coefficient
  - Probability-Statistics.Probability-Basics.Combinatorial-Probability
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
---

# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2024年8月実施 専門科目 第1問

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 原問題

![東京大学公式問題 第1問 原卷 2 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/tokyo-university/III/biostat_bioinfo/2025/biostat_bioinfo_202408_1_p1.png)

![東京大学公式問題 第1問 原卷 3 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/tokyo-university/III/biostat_bioinfo/2025/biostat_bioinfo_202408_1_p2.png)

![東京大学公式問題 第1問 原卷 4 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/tokyo-university/III/biostat_bioinfo/2025/biostat_bioinfo_202408_1_p3.png)

![東京大学公式問題 第1問 原卷 5 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/tokyo-university/III/biostat_bioinfo/2025/biostat_bioinfo_202408_1_p4.png)

![東京大学公式問題 第1問 原卷 6 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/tokyo-university/III/biostat_bioinfo/2025/biostat_bioinfo_202408_1_p5.png)

![東京大学公式問題 第1問 原卷 7 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/tokyo-university/III/biostat_bioinfo/2025/biostat_bioinfo_202408_1_p6.png)

![東京大学公式問題 第1問 原卷 8 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/tokyo-university/III/biostat_bioinfo/2025/biostat_bioinfo_202408_1_p7.png)

![東京大学公式問題 第1問 原卷 9 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/tokyo-university/III/biostat_bioinfo/2025/biostat_bioinfo_202408_1_p8.png)

### 題意の要約

次の15問について正しい選択肢を一つ選ぶ。

1. 次の5名の身長データについて、平均・中央値・歪みを判定する。

   | | Aさん | Bさん | Cさん | Dさん | Eさん |
   |---|---:|---:|---:|---:|---:|
   | 身長 (cm) | 171 | 172 | 173 | 175 | 180 |

2. 標準偏差15点の試験で偏差値の差が4のとき、得点差を求める。
3. 標準偏差と標準誤差に関する4記述から正しい組合せを選ぶ。
4. 次の確率関数を持つ $X$ の分散 $V(X)$ を求める。

   | | $x=0$ | $x=0.5$ |
   |---|---:|---:|
   | $\Pr(X=x)$ | $1-p$ | $p$ |

5. $f_X(x)=\frac58(1-x^4)$（$-1\le x\le1$）、$Y=2X$ の密度を求める。
6. $\log(1+x^2)$ を微分する。
7. 次の同時分布から $\Pr(Y=3\mid X\ge2)$ を求める。

   $$
   \begin{array}{c|ccc}
   &Y=1&Y=2&Y=3\\ \hline
   X=1&1/10&3/20&3/20\\
   X=2&1/10&0&1/5\\
   X=3&0&1/5&1/10
   \end{array}
   $$

8. 独立な $X,Y$ が $E[X]=\mu$, $V(X)=\sigma^2$, $E[Y]=2\mu$, $V(Y)=3\sigma^2$ を満たすとき、$2X-3Y$ の期待値と分散を求める。
9. 異なる10本のくじを5本ずつ2群に分ける。3本が当たりのとき、群間の当たり本数の差が1本以上となる分け方を数える。
10. 次の同時分布から $\operatorname{Cov}(X,Y)$ を求める。

    $$
    \begin{array}{c|ccc|c}
    &Y=1&Y=2&Y=3&\text{合計}\\ \hline
    X=1&1/4&1/12&1/12&5/12\\
    X=2&0&1/12&1/6&1/4\\
    X=3&1/12&1/6&1/12&1/3\\ \hline
    \text{合計}&1/3&1/3&1/3&1
    \end{array}
    $$

11. $\operatorname{Corr}(X,Y)=\rho$ のとき $\operatorname{Corr}(2X,2Y)$ を求める。
12. 次の前向き観察研究の表から、曝露なしに対する曝露ありの疾患発生率比を求める。

    | | 曝露あり | 曝露なし | 合計 |
    |---|---:|---:|---:|
    | 疾患あり | 45人 | 15人 | 60人 |
    | 疾患なし | 2,755人 | 5,585人 | 8,340人 |
    | 合計 | 2,800人 | 5,600人 | 8,400人 |
    | 観測人年 | 28,014人年 | 13,970人年 | 41,984人年 |

13. 独立な $X_1,\ldots,X_{10}\sim N(5,100)$ の標本平均の分布を求める。
14. 2群比較の $t$ 検定で平均差5、両側 $p=0.05$ のとき、平均差の両側95%信頼区間を選ぶ。
15. 仮説検定に関する記述から最も適切なものを選ぶ。

#### 题目描述

本题有15道单选题，选项及图表见上方原题图。

1. 5名学生身高为171、172、173、175、180 cm，判断均值、中位数及分布偏态。
2. 考试分数的标准差为15，两人的偏差值相差4，求原始分数差。
3. 判断标准差与标准误的含义、与方差的关系，以及能否由一次研究的数据估计，选择正确叙述的组合。
4. $P(X=0)=1-p$、$P(X=0.5)=p$，求 $X$ 的方差。
5. $X$ 的密度为 $\frac58(1-x^4)$（$-1\le x\le1$），求 $Y=2X$ 的密度及取值范围。
6. 求 $\log(1+x^2)$ 关于 $x$ 的一阶导数。
7. 联合概率表按 $X=1,2,3$ 分行、$Y=1,2,3$ 分列，各行为 $(1/10,3/20,3/20)$、$(1/10,0,1/5)$、$(0,1/5,1/10)$。求 $P(Y=3\mid X\ge2)$。
8. 独立的 $X,Y$ 满足 $E[X]=\mu$、$V(X)=\sigma^2$、$E[Y]=2\mu$、$V(Y)=3\sigma^2$，求 $2X-3Y$ 的期望和方差。
9. 10根不同编号的签中有3根中奖，将签分到 A、B 两组，每组5根。求两组中奖数至少相差1的分法数。
10. 联合概率表按 $X=1,2,3$ 分行、$Y=1,2,3$ 分列，各行为 $(1/4,1/12,1/12)$、$(0,1/12,1/6)$、$(1/12,1/6,1/12)$。求 $X,Y$ 的协方差。
11. $\operatorname{Corr}(X,Y)=\rho$，求 $\operatorname{Corr}(2X,2Y)$。
12. 前瞻研究中暴露组2800人、45人发病、观察28014人年；未暴露组5600人、15人发病、观察13970人年。以未暴露组为基准，求发病率比。
13. $X_1,\ldots,X_{10}$ 独立服从均值5、方差100的正态分布，求样本均值的分布。
14. 两组随机化试验的均值差为5，双侧 $t$ 检验的 $p$ 值为0.05，选择均值差的双侧95%置信区间。
15. 关于第一类错误概率、重复检验、名义显著性水平与样本数及 $p$ 值的关系，选择最恰当的叙述。

## **Kai**

### (1-1)

$$
\bar x=\frac{871}{5}=174.2>173=\operatorname{median}(x).
$$

右に裾を引くので、

$$
\boxed{\text{ウ}}.
$$

### (1-2)

偏差値 $T=50+10(x-\bar x)/15$ より、

$$
\Delta x=15\frac{\Delta T}{10}=15\frac4{10}=6.
$$

$$
\boxed{\text{ウ}.\ 6}
$$

### (1-3)

標準偏差は個人間のばらつき、標準誤差は統計量の標本間のばらつきを表す。正しいのは (a), (c) なので、

$$
\boxed{\text{イ}}.
$$

### (1-4)

$$
V(X)=\frac14p-\left(\frac12p\right)^2
=\frac14p(1-p).
$$

$$
\boxed{\text{エ}}
$$

### (1-5)

$x=y/2$、$|dx/dy|=1/2$ より、

$$
f_Y(y)=\frac{5}{16}\left[1-\left(\frac y2\right)^4\right],
\qquad -2\le y\le2.
$$

$$
\boxed{\text{オ}}
$$

### (1-6)

$$
\frac{d}{dx}\log(1+x^2)=\frac{2x}{1+x^2}.
$$

$$
\boxed{\text{オ}}
$$

### (1-7)

$$
\Pr(Y=3\mid X\ge2)
=\frac{1/5+1/10}{(1/10+1/5)+(1/5+1/10)}
=\frac12.
$$

$$
\boxed{\text{エ}}
$$

### (1-8)

$$
E[2X-3Y]=-4\mu,\qquad
V(2X-3Y)=4\sigma^2+9\cdot3\sigma^2=31\sigma^2.
$$

$$
\boxed{\text{エ}}
$$

### (1-9)

当たり3本は2群に同数ずつ入らない。群Aの5本を選べば分割が定まるので、

$$
\binom{10}{5}=252.
$$

$$
\boxed{\text{エ}}
$$

### (1-10)

表から

$$
E[X]=\frac{23}{12},\qquad E[Y]=2,
\qquad E[XY]=4.
$$

したがって、

$$
\operatorname{Cov}(X,Y)=4-\frac{23}{12}\cdot2
=\frac16.
$$

$$
\boxed{\text{オ}}
$$

### (1-11)

正の定数倍では相関係数は変わらないから、

$$
\operatorname{Corr}(2X,2Y)=\rho.
$$

$$
\boxed{\text{エ}}
$$

### (1-12)

$$
\frac{45/28014}{15/13970}=1.496\ldots\approx1.5.
$$

$$
\boxed{\text{エ}.\ 1.5}
$$

### (1-13)

$$
\bar X\sim N\left(5,\frac{100}{10}\right)=N(5,10).
$$

$$
\boxed{\text{オ}}
$$

### (1-14)

両側 $p=0.05$ なので0は95%信頼区間の端点となる。区間は平均差5を中心に対称だから、

$$
\boxed{[0,10]}.
$$

したがって $\boxed{\text{ア}}$。

### (1-15)

第一種過誤確率は、離散検定などでは名目有意水準と一致せず、それ以下となることがある。

$$
\boxed{\text{エ}}
$$

## **Reference**

- [東京大学大学院 情報学環・学際情報学府 修士課程 過去の入学試験問題](https://www.iii.u-tokyo.ac.jp/admissions/master-pastexams)
- [2025年度 専門科目（生物統計情報学コース）公式問題 PDF](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2025/03/2025toukei.pdf)
