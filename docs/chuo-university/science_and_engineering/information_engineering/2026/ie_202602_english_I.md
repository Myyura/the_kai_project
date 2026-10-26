---
sidebar_label: "2026年2月実施 英語 問題I"
tags:
  - Chuo-University
  - Mathematics.Linear-Algebra.Vector-Norm
---

# 中央大学 理工学研究科 情報工学専攻 2026年2月実施 一般入試（春季）英語 問題I

## **Author**

祭音Myyura (Based on [中央大学の公式解答例](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf) refined with GPT 6 Astra)

## **Description**

次の英文を読み、英文の内容に従って問いに答えよ。

The distance between two pixels $P_1(x_1,y_1)$ and $P_2(x_2,y_2)$ on a two-dimensional digital image is defined as $d\geq0$. It is known that there are multiple values for $d$ that satisfy the mathematical definition of distance. Among these, the following three types are commonly used for two-dimensional digital images.

The first is called the Euclidean distance $d_e$, which is the shortest length between two points measured along a straight line—the distance we commonly use in daily life. It is expressed by the following formula:

$$
d_e=\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}.
$$

The second is called the Manhattan distance $d_m$, which represents the distance when only vertical and horizontal movement is allowed, as if walking along grid-patterned streets. It is also known as the city block distance. It is expressed by the following formula.

$$
d_m=|x_1-x_2|+|y_1-y_2|.
$$

The third is called the Chebyshev distance $d_c$, which counts diagonal movement as one step in addition to vertical and horizontal movement. Because it resembles the movement of a chess king, it is also called the king's distance. It is expressed by the following formula.

$$
d_c=\max\{|x_1-x_2|,|y_1-y_2|\}.
$$

Among these three distances, <u>Chebyshev distance is the most advantageous from a computational load perspective in computing.</u> (a) Euclidean distance requires squaring, addition, and the highly costly calculation of square roots. In contrast, Manhattan distance can be computed using only absolute values and addition. Furthermore, Chebyshev distance only requires comparison operations to select the “larger” of two differences and does not require floating-point arithmetic. This makes it superior to the other two distances for fast computation in real-time demanding scenarios like image processing and pathfinding.

The distance between $P_1$ and $P_2$ varies depending on the type of distance used. For example, when $P_1(2,1)$ and $P_2(6,4)$ are set, the distance between $P_1$ and $P_2$ are calculated as $d_e=\text{(b)}$, $d_m=\text{(c)}$, and $d_c=\text{(d)}$, respectively. Generally, the relationship of $d_c\leq d_e\leq d_m$ always holds for the same two points. When two pixels are sufficiently far apart, the equality in the above holds only when $P_1$ and $P_2$ are aligned vertically or horizontally.

Next, let's consider the shape formed by the set of pixels within a “distance of 10” from pixel $P_0(x_0,y_0)$ and the number of pixels contained within that shape. The shape representing $d_e\leq10$ is the edge and interior of a circle centered at $P_0$ with a radius of 10. On the other hand, the shape representing $d_m\leq10$ is the edge and interior of a 45-degree tilted square with a diagonal length of 20, where $P_0$ is the intersection of the diagonals. Furthermore, the shape representing $d_c\leq10$ is the edge and interior of a square with a side length of 20 and its center of gravity at $P_0$. <u>As can be seen immediately by drawing the three resulting shapes,</u> (e) the shape containing the most pixels internally is the Chebyshev distance, while the shape containing the fewest pixels is the Manhattan distance. That is, when the distance is sufficiently large, the relationship between the areas covered by distances of the same value is: area defined by <u>(f)</u> $<$ area defined by <u>(g)</u> $<$ area defined by <u>(h)</u>.

1. 下線部 (a) の記述の根拠となる説明を、本文内容に即して日本語で述べよ。
2. 文中 (b)、(c)、(d) に整合する値をそれぞれ示せ。
3. 下線部 (e) に整合する図を描け。図には $x$ 軸、$y$ 軸を明記すること。
4. 文中 (f)、(g)、(h) に整合する距離変数をそれぞれ解答せよ。
5. 挙げた3種の距離の名称のうち一つは地名、残り二つは人名に由来する。地名由来の距離はどれか。また、なぜそのような名称となったのか、本文内容に即して説明せよ。

### 题目描述

阅读以下英文，并根据文章内容回答问题。

二维数字图像中，两个像素 $P_1(x_1,y_1)$ 和 $P_2(x_2,y_2)$ 之间的距离定义为 $d\geq0$。满足距离的数学定义的 $d$ 有多种取法，其中以下三种常用于二维数字图像。

第一种称为欧几里得距离 $d_e$，它是沿直线测量的两点之间的最短长度，也就是日常生活中常用的距离，公式为

$$
d_e=\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}.
$$

第二种称为曼哈顿距离 $d_m$，表示只允许竖直和水平移动时的距离，如同沿网格状街道行走，也称为街区距离，公式为

$$
d_m=|x_1-x_2|+|y_1-y_2|.
$$

第三种称为切比雪夫距离 $d_c$，除竖直和水平移动外，还将对角移动算作一步。因为这种移动类似国际象棋中的王，也称为王距离，公式为

$$
d_c=\max\{|x_1-x_2|,|y_1-y_2|\}.
$$

在这三种距离中，<u>从计算负担来看，切比雪夫距离最有优势。</u> (a) 欧几里得距离需要平方、加法以及计算代价很高的平方根运算。相比之下，曼哈顿距离只需绝对值和加法。此外，切比雪夫距离只需通过比较选择两个差中的较大者，无需浮点运算。这使它在图像处理、寻路等要求实时性的场景中，比另外两种距离更适合快速计算。

两点之间的距离取决于所采用的距离类型。例如，设 $P_1(2,1)$、$P_2(6,4)$，则三种距离分别为 $d_e=\text{(b)}$、$d_m=\text{(c)}$、$d_c=\text{(d)}$。一般而言，同样两点始终满足 $d_c\leq d_e\leq d_m$。当两个像素相距足够远时，只有它们在竖直或水平方向对齐，上述等号才成立。

接下来考虑距像素 $P_0(x_0,y_0)$ 不超过“距离10”的像素集合形成的图形，以及图形包含的像素数量。$d_e\leq10$ 对应以 $P_0$ 为圆心、半径为10的圆的边界及内部。$d_m\leq10$ 对应倾斜45度、对角线长20的正方形的边界及内部，$P_0$ 为两条对角线的交点。$d_c\leq10$ 则对应边长20、重心为 $P_0$ 的正方形的边界及内部。<u>画出这三种图形就能立即看出，</u> (e) 内部像素最多的是切比雪夫距离对应的图形，最少的是曼哈顿距离对应的图形。因此，当距离充分大时，相同距离值所覆盖的面积满足：(f) 对应的面积 $<$ (g) 对应的面积 $<$ (h) 对应的面积。

1. 根据文章内容，用日语说明支持下划线 (a) 结论的理由。
2. 分别填写 (b)、(c)、(d) 的值。
3. 绘制符合下划线 (e) 内容的图，并明确标出 $x$ 轴和 $y$ 轴。
4. 分别填写 (f)、(g)、(h) 所对应的距离变量。
5. 三种距离的名称中，一种源于地名，另外两种源于人名。哪一种源于地名？根据文章说明它为何如此命名。

## **Kai**

### 1. 計算負荷

本文によれば、ユークリッド距離は差の二乗、加算、および計算負荷の高い平方根を必要とする。マンハッタン距離は差の絶対値と加算で求められる。チェビシェフ距離は二つの座標差の絶対値を比較して大きい方を選ぶだけでよく、画素座標が整数なら浮動小数点演算も不要である。このため、本文で想定する計算ではチェビシェフ距離の負荷が最も小さい。

### 2. 三つの距離

座標差の絶対値は $|2-6|=4$、$|1-4|=3$ なので、

$$
\begin{aligned}
d_e&=\sqrt{4^2+3^2}=5,\\
d_m&=4+3=7,\\
d_c&=\max\{4,3\}=4.
\end{aligned}
$$

したがって **(b) $5$、(c) $7$、(d) $4$**。

### 3. 距離10以内の領域

中心を $P_0=(x_0,y_0)$ とすると、三つの境界はそれぞれ

$$
\begin{aligned}
d_e=10&:\quad (x-x_0)^2+(y-y_0)^2=100,\\
d_m=10&:\quad |x-x_0|+|y-y_0|=10,\\
d_c=10&:\quad \max\{|x-x_0|,|y-y_0|\}=10.
\end{aligned}
$$

円、ひし形、軸に平行な正方形を、同じ中心に重ねて描く。各距離の領域は境界とその内部である。下図では画像座標に合わせて $y$ 軸を下向きに描いた。

![ユークリッド距離・マンハッタン距離・チェビシェフ距離が10以下となる領域](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2026/ie_202602_english_I_distance_regions.svg)

（作図：祭音Myyura）

### 4. 面積の大小

マンハッタン距離のひし形の面積は $20\times20/2=200$、ユークリッド距離の円の面積は $100\pi$、チェビシェフ距離の正方形の面積は $20^2=400$ である。よって

$$
200<100\pi<400,
$$

すなわち **(f) $d_m$、(g) $d_e$、(h) $d_c$**。

### 5. 地名に由来する距離

**マンハッタン距離（Manhattan distance）** である。マンハッタンのように道路が格子状に配置された街では、道路に沿って水平方向と垂直方向に移動する。二地点間の最短の道のりは水平方向の移動量と垂直方向の移動量の和になり、本文の $|x_1-x_2|+|y_1-y_2|$ と一致するため、この名称が付いている。

## **Reference**

- [中央大学公式過去問題：2026年度 情報工学専攻、英語・春季 問題I（冊子p.12／PDF第13頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-01.pdf#page=13)
- [中央大学公式「解答または解答例・出題の意図」（冊子p.17／PDF第18頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf#page=18)
