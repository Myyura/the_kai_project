---
sidebar_label: "2019年8月実施 専門科目 第1問"
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Family-Wise-Error-Rate
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Weibull-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Odds-Ratio-and-Confidence-Interval
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Receiver-Operating-Characteristic-Curve-Interpretation
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2019年8月実施 専門科目 第1問

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 原問題

![東京大学公式問題 第1問 原卷 2 ページ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/III/biostat_bioinfo/2020/biostat_bioinfo_201908_1_p1.png)

![東京大学公式問題 第1問 原卷 3 ページ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/III/biostat_bioinfo/2020/biostat_bioinfo_201908_1_p2.png)

![東京大学公式問題 第1問 原卷 4 ページ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/III/biostat_bioinfo/2020/biostat_bioinfo_201908_1_p3.png)

![東京大学公式問題 第1問 原卷 5 ページ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/III/biostat_bioinfo/2020/biostat_bioinfo_201908_1_p4.png)

![東京大学公式問題 第1問 原卷 6 ページ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/III/biostat_bioinfo/2020/biostat_bioinfo_201908_1_p5.png)

![東京大学公式問題 第1問 原卷 7 ページ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/III/biostat_bioinfo/2020/biostat_bioinfo_201908_1_p6.png)

![東京大学公式問題 第1問 原卷 8 ページ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/III/biostat_bioinfo/2020/biostat_bioinfo_201908_1_p7.png)

![東京大学公式問題 第1問 原卷 9 ページ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/III/biostat_bioinfo/2020/biostat_bioinfo_201908_1_p8.png)

### 題意の要約

1. 得点 $33,45,47,52,53,54,54,55,55,55,57,58,61,62,62,63,65,65,65,73,76,77,82,88,94$ の中央値。
2. VAS 変化量の箱ひげ図 A, B を比較する（PDF p.3）。外れ値も範囲に含める。
3. $E[X]=2,\operatorname{SD}(X)=4$ のとき $E[2X^2]$。
4. $X\sim N(160,100)$ の $P(X\ge170)$。
5. $\operatorname{Corr}(X,Y)=\rho$ から $\operatorname{Corr}(X/3,Y+5)$。
6. $P(X=1,2,3)=(.2,.5,.3)$。独立な100人の $P(\bar X\le2)$。
7. 4人を独立に確率1/2で二群に割り付け、人数が等しくならない確率。
8. 独立な回答確率.99の $n$ 人が全員回答する確率が.5となる $n$ の近似。
9. 全データが2倍となったときの変動係数の比。
10. 二値の同時確率 $p_{xy}$ から周辺・条件付き確率を判定する。
11. 独立な水準.05の二検定で、帰無仮説の下で少なくとも一方が有意になる確率。
12. 正規近似による95%信頼区間を90%にしたときの幅の比。
13. 対応のある二値データ $\left(\begin{smallmatrix}A_1&B_1\\A_0&B_0\end{smallmatrix}\right)$ の周辺比率が等しいという帰無仮説。
14. 5,000人中40人が有病、感度・特異度がともに.9の検査の陽性人数の期待値。
15. 500人中20人発症した比率を帰無値.001と比較する検定統計量。
16. 二群の発症割合を比較する検出力計算に不要な設定項目を選ぶ。
17. 1年・2年累積生存率.60,.36から1年当たり死亡確率。
18. $F(t)=1-e^{-(\lambda t)^\gamma}$ の微分。
19. $\widehat{\mathrm{OR}}=A_1B_0/(B_1A_0)$、$\operatorname{Var}(\log\widehat{\mathrm{OR}})\simeq1/A_1+1/B_1+1/A_0+1/B_0$ から95%信頼区間。
20. 原図の五つの ROC 曲線から最良の検査を選ぶ（PDF p.9）。本文と軸ラベルの説明が逆転しているため、図の縦軸「感度」・横軸「1−特異度」に従う。

#### 题目描述

本题有20道选择题，选项及图表见上方原题图。

1. 得分为 $33,45,47,52,53,54,54,55,55,55,57,58,61,62,62,63,65,65,65,73,76,77,82,88,94$，求中位数。
2. 随机化两组试验用 VAS 测量治疗前后症状。比较图中 A、B 组变化量的偏态、第三四分位数、四分位距和极差，选择正确叙述；极差包括离群点。
3. $E[X]=2$、$\operatorname{SD}(X)=4$，令 $Y=2X^2$，求 $E[Y]$。
4. 身高 $X$ 服从均值160 cm、标准差10 cm的正态分布，求 $P(X\ge170)$。
5. $\operatorname{Corr}(X_1,Y_1)=\rho$，求 $X_2=X_1/3$ 与 $Y_2=Y_1+5$ 的相关系数。
6. 症状分数满足 $P(X=1)=0.2$、$P(X=2)=0.5$、$P(X=3)=0.3$。100名患者独立服从此分布，近似求平均分不超过2的概率。
7. 4名患者以1:1概率独立随机分到两组，求两组人数不相等的概率。
8. 每位对象独立回答问卷的概率为0.99，所有人均回答的概率为0.5，近似求总人数。可用 $\ln p\simeq p-1$（$p\simeq1$）、$\ln0.5\simeq-0.69$。
9. 各地区游客人数的均值和标准差均为50万人。若每个地区的游客数都变为原来的2倍，变异系数变为多少倍？
10. 二元随机变量的联合概率为 $P(X=x,Y=y)=p_{xy}$，其中 $x,y\in\{0,1\}$。判断给出的联合概率、边缘概率和条件概率关系。
11. 两项相互独立、第一类错误概率均为0.05的检验，在原假设成立时至少一项显著的概率是多少？
12. 基于正态近似的双侧置信区间，将置信水平由95%改为90%，区间宽度约变为原来的多少倍？
13. 交叉试验比较同一受试者用实药和安慰剂时是否有症状。列联表按实药有/无症状分行、安慰剂有/无症状分列，依次为 $\left(\begin{smallmatrix}A_1&B_1\\A_0&B_0\end{smallmatrix}\right)$。行和为 $N_1,N_0$，列和为 $M_A,M_B$，总人数为 $N$。选择表示药物无效果的原假设。
14. 5000名居民中40人患病，筛查的敏感度和特异度均为0.9，求预计阳性人数。
15. 500名罕见肺病患者中20人合并肺癌；相同性别、年龄和吸烟史的一般人群肺癌比例为0.001。检验患者群发病比例更高时，选择检验统计量的正确分子与分母。
16. 计划比较两种疗法发病比例的随机化试验。样本数、入组时长、显著性水平、一组发病比例及两组比例差中，哪一项不属于该比例检验功效计算的必要设定？
17. 一年和两年的累计生存概率分别为0.60、0.36，求每年的死亡概率。
18. Weibull 生存时间的分布函数为 $F(t)=1-e^{-(\lambda t)^\gamma}$，求概率密度。
19. 暴露有/无分行、发病有/无分列的表为 $\left(\begin{smallmatrix}A_1&B_1\\A_0&B_0\end{smallmatrix}\right)$。对数优势比近似正态，且其方差为 $1/A_1+1/B_1+1/A_0+1/B_0$，求优势比 $A_1B_0/(B_1A_0)$ 的95%置信区间。
20. 根据原图五条 ROC 曲线选择诊断性能最好的检验。原文的坐标轴说明与图上标签相反，按图中纵轴“敏感度”、横轴“1−特异度”理解。

## **Kai**
### (1-1)
イ. 61点

### (1-2)
オ. (b), (e)

### (1-3)
エ. 40

なぜなら、

$$
\begin{aligned}
E(Y)
&=
E(2X^2)
=
2 E(X^2)
=
2 \left( V(X) + E(X)^2 \right)
\\
&=
2 \cdot \left( 4^2 + 2^2 \right)
=
40
\end{aligned}
$$

### (1-4)
イ. 0.16

### (1-5)
ウ. $\rho$

### (1-6)
ア. 0.1

### (1-7)
エ. 62.5%

なぜなら、

$$
\begin{aligned}
1 - {}_4 C_2 \left( \frac{1}{2} \right)^4
= \frac{5}{8}
= 0.625
\end{aligned}
$$

### (1-8)
イ. 70

なぜなら、求める対象者数を $n$ とすると、

$$
\begin{aligned}
0.99^n &= 0.5
\\
n \ln 0.99 &= \ln 0.5
\\
n \cdot \left( 0.99 - 1 \right) &\approx - 0.69
\\
n &\approx 69
\end{aligned}
$$

したがって，最も近い選択肢はイの $70$ 人である。

### (1-9)
ウ. 1倍

平均と標準偏差はいずれも2倍になるため、変動係数は変わらない。

### (1-10)
イ. (b), (d)

### (1-11)
オ. 0.0975

なぜなら、$0.05 + 0.05 - 0.05^2 = 0.0975$

### (1-12)
エ. 0.85倍

なぜなら、$\frac{1.65}{1.96} \approx 0.8418$

### (1-13)
エ. (c), (d)

帰無仮説は周辺割合が等しいこと、すなわち

$$
\frac{N_1}{N}=\frac{M_A}{N}
$$

である。これは $A_1+B_1=A_1+A_0$、すなわち $B_1=A_0$ と同値である。

### (1-14)
オ. 535人

陽性者数の期待値は

$$
40 \cdot \frac{9}{10} + 4960 \cdot \frac{1}{10} = 532
$$

なので，最も近い選択肢はオの $535$ 人である。

### (1-15)
オ. (b), (e)

### (1-16)
イ. 登録期間

### (1-17)
ウ. 40%

### (1-18)
ウ. $f(t) = \lambda \gamma (\lambda t)^{\gamma - 1} \exp[-(\lambda t)^{\gamma}]$

### (1-19)
エ. $\bigg[ \exp \bigg[\ln(\hat{\text{OR}}) - 1.96 \sqrt{(\frac{1}{A_1} + \frac{1}{B_1} + \frac{1}{A_0} + \frac{1}{B_0})} \bigg], \exp \bigg[\ln(\hat{\text{OR}}) + 1.96 \sqrt{(\frac{1}{A_1} + \frac{1}{B_1} + \frac{1}{A_0} + \frac{1}{B_0})} \bigg] \bigg]$

### (1-20)
ア. (a)

なぜなら、感度と特異度がともに1に近いところを通っているから。

## **Reference**

- [東京大学大学院情報学環・学際情報学府 公式問題（PDF 2–9 ページ）](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2020/05/33d0876fac7c7139408cdba66732a39b-1.pdf)
