---
sidebar_label: "2025年8月実施 専門科目 第1問"
tags:
  - Tokyo-University
  - Probability-Statistics.Descriptive-Statistics-and-Sampling.Mean-Median-and-Quartiles
  - Probability-Statistics.Descriptive-Statistics-and-Sampling.Standard-Error-of-Sample-Mean
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Random-Variable-Transformation
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Combinatorial-Probability
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Standardization-and-Tail-Probability
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Weibull-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Odds-Ratio-and-Confidence-Interval
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Statistical-Power
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Sample-Size-for-Target-Power
---

# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2025年8月実施 専門科目 第1問

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 原問題

![東京大学公式問題 第1問 原卷 2 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/tokyo_university/III/biostat_bioinfo/2026/biostat_bioinfo_202508_1_p1.png)

![東京大学公式問題 第1問 原卷 3 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/tokyo_university/III/biostat_bioinfo/2026/biostat_bioinfo_202508_1_p2.png)

![東京大学公式問題 第1問 原卷 4 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/tokyo_university/III/biostat_bioinfo/2026/biostat_bioinfo_202508_1_p3.png)

![東京大学公式問題 第1問 原卷 5 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/tokyo_university/III/biostat_bioinfo/2026/biostat_bioinfo_202508_1_p4.png)

![東京大学公式問題 第1問 原卷 6 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/tokyo_university/III/biostat_bioinfo/2026/biostat_bioinfo_202508_1_p5.png)

![東京大学公式問題 第1問 原卷 7 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/tokyo_university/III/biostat_bioinfo/2026/biostat_bioinfo_202508_1_p6.png)

![東京大学公式問題 第1問 原卷 8 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/tokyo_university/III/biostat_bioinfo/2026/biostat_bioinfo_202508_1_p7.png)

![東京大学公式問題 第1問 原卷 9 ページ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/tokyo_university/III/biostat_bioinfo/2026/biostat_bioinfo_202508_1_p8.png)

### 題意の要約

次の15問について正しい選択肢を一つ選ぶ。

1. 次の学生10名の小テストの得点（点）について、平均・中央値・最頻値を求める。

   $$
   \begin{array}{ccccc}\hline
   9&1&10&5&2\\ \hline
   7&3&8&4&8\\ \hline
   \end{array}
   $$

2. 最低点・最高点・平均値・標準偏差・受験者数から計算できる指標を選ぶ。
3. 独立な標本 $x_1,\ldots,x_n$ から平均の標準誤差を求める式を選ぶ。
4. 次の確率分布を持つ $X$ の分散 $V(X)$ を求める。

   | | $x=1$ | $x=2$ | $x=3$ |
   |---|---:|---:|---:|
   | $\Pr(X=x)$ | $p$ | $q$ | $1-p-q$ |

5. $\exp(1-x^3)$ を微分する。
6. $f_X(x)=\frac59(x^3-1)$（$-3\le x\le3$）、$Y=X/3$ として、変数変換後の式を選ぶ。
7. 赤玉は数字1が2個、2が3個、3が1個、白玉は数字1が1個、2が0個、3が3個ある。各確率記述の正誤を判定する。
8. 独立な $X,Y$ が $E[X]=\mu$, $V(X)=\sigma^2$, $E[Y]=3\mu$, $V(Y)=2\sigma^2$ を満たすとき、$X-2Y$ の期待値と分散を求める。
9. 1から10の番号を持つ10個の球を5個ずつ2群に分ける。群Aの最大番号が8以上となる分け方を数える。
10. $\sigma_X=6$, $\sigma_Y=7$, $\rho=0.5$ から共分散を求める。
11. $T\sim N(1.96,1)$ と近似できるとき、$T$ から作る両側95%信頼区間の下限が0を上回る確率を求める。
12. 次の前向き観察研究の表から、曝露なしに対する曝露ありの疾患のオッズ比を求める。

    | | 曝露あり | 曝露なし | 合計 |
    |---|---:|---:|---:|
    | 疾患あり | 45人 | 15人 | 60人 |
    | 疾患なし | 3,850人 | 2,310人 | 6,160人 |
    | 合計 | 3,895人 | 2,325人 | 6,220人 |

13. 2群の割合差が0より大きいかを片側有意水準 $\alpha$ で検定するときの検出力関数を選ぶ。
14. 密度 $f(t)=\lambda\gamma(\lambda t)^{\gamma-1}e^{-(\lambda t)^\gamma}$ のワイブル分布について $\Pr(T>t)$ を求める。
15. 2群ランダム化試験の必要標本数計算で、ある設定値を半分にすると必要人数が4倍になった。その設定値を選ぶ。

#### 题目描述

本题有15道单选题，选项及图表见上方原题图。

1. 10名学生的得分为 $9,1,10,5,2,7,3,8,4,8$，求均值、中位数和众数。
2. 已知考试的最低分、最高分、均值、标准差和人数，判断能否计算中位数、四分位距、变异系数、95百分位数或偏差值。
3. 由独立样本 $x_1,\ldots,x_n$ 选择计算样本均值标准误的公式。
4. $P(X=1)=p$、$P(X=2)=q$、$P(X=3)=1-p-q$，求 $X$ 的方差。
5. 求 $\exp(1-x^3)$ 关于 $x$ 的一阶导数。
6. 原题给出 $f_X(x)=\frac59(x^3-1)$（$-3\le x\le3$），令 $Y=X/3$，选择按变量变换得到的式子与取值范围。该给定函数是否满足概率密度条件，见答案中的说明。
7. 壶内红球的编号1、2、3分别有2、3、1个，白球分别有1、0、3个。球的大小和手感相同，随机抽一个，判断编号、颜色的边缘概率、联合概率和条件概率叙述。
8. 独立的 $X,Y$ 满足 $E[X]=\mu$、$V(X)=\sigma^2$、$E[Y]=3\mu$、$V(Y)=2\sigma^2$，求 $X-2Y$ 的期望和方差。
9. 将编号1至10的10个球分到 A、B 两组，每组5个。求 A 组最大编号至少为8的分法数。
10. $X,Y$ 的标准差分别为6、7，相关系数为0.5，求协方差。
11. 统计量 $T$ 近似服从均值1.96、标准误1的正态分布，标准误已知。求由观测值构造的双侧95%置信区间下限超过0的概率。
12. 前瞻研究中暴露组有45名发病者、3850名未发病者；未暴露组有15名发病者、2310名未发病者。以未暴露组为基准，求发病优势比。
13. 两组事件发生比例期望为 $p_1,p_2$，样本量为 $n_1,n_2$。记 $z_\alpha$ 为标准正态分布上侧 $\alpha$ 分位点，$\Phi$ 为其分布函数。以单侧显著性水平 $\alpha$ 检验两组比例差大于0，选择功效函数 $\operatorname{power}(p_1,p_2)$。
14. Weibull 分布的密度为 $f(t)=\lambda\gamma(\lambda t)^{\gamma-1}e^{-(\lambda t)^\gamma}$，求生存概率 $P(T>t)$。
15. 计划比较新治疗与安慰剂对症状评分较基线变化量的随机化试验。某项设定值减半时，所需人数变为4倍；从第一类错误概率、第二类错误概率、预期组间差、变化量的标准差和分配比中选择该项。

## **Kai**

### (1-1)

昇順に並べると $1,2,3,4,5,7,8,8,9,10$ であり、

$$
\bar x=5.7,\qquad \operatorname{median}(x)=6,\qquad
\operatorname{mode}(x)=8.
$$

$$
\boxed{\text{ウ}}
$$

### (1-2)

平均値と標準偏差から

$$
\mathrm{CV}=\frac{\text{標準偏差}}{\text{平均値}}
$$

を計算できる。

$$
\boxed{\text{ウ}.\ \text{変動係数}}
$$

### (1-3)

標本標準偏差を

$$
s=\sqrt{\frac1{n-1}\sum_{i=1}^n(x_i-\bar x)^2}
$$

とすると、平均の標準誤差は $s/\sqrt n$ である。

$$
\boxed{\text{エ}}
$$

### (1-4)

$$
E[X]=3-2p-q,\qquad E[X^2]=9-8p-5q.
$$

したがって、

$$
V(X)=-4p^2-q^2-4pq+4p+q.
$$

$$
\boxed{\text{イ}}
$$

### (1-5)

$$
\frac{d}{dx}e^{1-x^3}=-3x^2e^{1-x^3}.
$$

$$
\boxed{\text{オ}}
$$

### (1-6)

$x=3y$、$|dx/dy|=3$ より、

$$
f_Y(y)=3f_X(3y)=45y^3-\frac53,\qquad -1\le y\le1,
$$

となり、**形式的な変数代換**に対応する選択肢は $\boxed{\text{オ}}$ である。

ただし、与えられた $f_X$ は確率密度の条件を満たさない。$f_X(0)=-5/9<0$ で、

$$
\int_{-3}^{3}\frac59(x^3-1)\,dx=-\frac{10}{3}\ne1.
$$

したがってこれは確率密度ではなく、変換後の式も確率密度にはならない。

### (1-7)

数字3の玉は4個、そのうち白玉は3個なので、

$$
\Pr(\text{白}\mid\text{数字3})=\frac34.
$$

$$
\boxed{\text{ウ}}
$$

### (1-8)

$$
E[X-2Y]=\mu-6\mu=-5\mu,\qquad
V(X-2Y)=\sigma^2+4\cdot2\sigma^2=9\sigma^2.
$$

$$
\boxed{\text{イ}}
$$

### (1-9)

全分け方から群Aが $\{1,\ldots,7\}$ のみで構成される場合を除く。

$$
\binom{10}{5}-\binom75=252-21=231.
$$

$$
\boxed{\text{ウ}}
$$

### (1-10)

$$
\operatorname{Cov}(X,Y)=\rho\sigma_X\sigma_Y
=0.5\cdot6\cdot7=21.
$$

$$
\boxed{\text{イ}}
$$

### (1-11)

信頼区間の下限は $T-1.96$ である。よって、

$$
\Pr(T-1.96>0)=\Pr(T>E[T])=\frac12.
$$

$$
\boxed{\text{ウ}.\ 50\%}
$$

### (1-12)

$$
\mathrm{OR}=\frac{45/3850}{15/2310}
=\frac95=1.8.
$$

$$
\boxed{\text{エ}.\ 1.8}
$$

### (1-13)

$$
\delta=\frac{p_1-p_2}
{\sqrt{p_1(1-p_1)/n_1+p_2(1-p_2)/n_2}}
$$

とおき、$z_\alpha=\Phi^{-1}(1-\alpha)$ とする。ここでは標本比率差に正規近似を用い、その分散で標準化する近似の下で、

$$
\operatorname{power}(p_1,p_2)
\simeq1-\Phi(z_\alpha-\delta).
$$

$$
\boxed{\text{エ}}
$$

### (1-14)

$$
\Pr(T>t)=\exp\left[-(\lambda t)^\gamma\right].
$$

$$
\boxed{\text{エ}}
$$

### (1-15)

必要標本数は期待する群間差 $\Delta$ に対して $n\propto\Delta^{-2}$ である。したがって $\Delta$ を半分にすると $n$ は4倍になる。

$$
\boxed{\text{ウ}.\ \text{期待する群間差}}
$$

## **Reference**

- [東京大学大学院 情報学環・学際情報学府 修士課程 過去の入学試験問題](https://www.iii.u-tokyo.ac.jp/admissions/master-pastexams)
- [2026年度 専門科目（生物統計情報学コース）公式問題 PDF](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2026/05/2026smtoukei.pdf)
