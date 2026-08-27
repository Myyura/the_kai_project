# 電気通信大学大学院過去問题解：来源与验证审计

更新日期：2026-08-27

本文件只记录题源、覆盖范围、订正、官方解答核对及程序验证情况。正式题解位于 `docs/UEC/`，不混入这些过程说明。

## 1. 官方来源与年份口径

- 官方索引：[大学院入試 過去問題](https://www.uec.ac.jp/education/graduate/admission/kakomon.html)
- 当前官方页面公开 2021 年 8 月至 2025 年 8 月的博士前期課程一般入試専門科目，共 39 份试题 PDF。
- 2025 年 8 月考试另有 4 份专攻合订“解答例”；2021—2024 年在该页面没有官方解答例。
- 仓库目录按入学年度命名，因此 `2025年8月実施` 放入 `2026/`，依此类推。
- 题解只转述解题所需条件；官方 PDF 不复制进仓库。

## 2. 官方 PDF 清单

表中“必”表示必須問題，“选”表示選択問題，“答”表示官方解答例。M 专攻的物理必答题不在本次范围，但保留来源记录。

| 实施年月 | 情報学 J | 情報・ネットワーク I | 機械知能 M | 基盤理工 S | 官方解答 |
| --- | --- | --- | --- | --- | --- |
| 2025-08 | [必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_1_j_mandatory202508.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_2_j_choice202508.pdf) | [必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_3_i_mandatory202508.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_4_i_choice202508.pdf) | [数学必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_5_m_mandatory202508.pdf)・[物理必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_6_m_mandatory_buturi202508.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_7_m_choice202508.pdf) | [选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_8_s_choice202508.pdf) | [J](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_1_j_answer202508.pdf)・[I](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_2_i_answer202508.pdf)・[M](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_3_m_answer202508.pdf)・[S](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_4_s_answer202508.pdf) |
| 2024-08 | [必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_1_j_mandatory202408.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_2_j_choice202408.pdf) | [必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_3_i_mandatory202408.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_4_i_choice202408.pdf) | [数学必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_5_m_mandatory202408.pdf)・[物理必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_6_m_mandatory_buturi202408.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_7_m_choice202408.pdf) | [选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_8_s_choice202408.pdf) | 无 |
| 2023-08 | [必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_mandatory202308.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_choice202308.pdf) | [必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_i_mandatory202308.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_i_choice202308.pdf) | [数学必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_mandatory202308.pdf)・[物理必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_mandatory_buturi202308.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202308.pdf) | [选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_s_choice202308.pdf) | 无 |
| 2022-08 | [必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_mandatory202208.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_choice202208.pdf) | [必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_i_mandatory202208.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_i_choice202208.pdf) | [数学必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_mandatory202208.pdf)・[物理必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_mandatory_buturi202208.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202208.pdf) | [选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_s_choice202208.pdf) | 无 |
| 2021-08 | [必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_mandatory202108.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_choice202108.pdf) | [必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_i_mandatory202108.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_i_choice202108.pdf) | [必](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_mandatory202108.pdf)・[选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202108.pdf) | [选](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_s_choice202108.pdf) | 无 |

## 3. 本次收录边界

收录以下科目中实际出现的题目：

- 数学：微积分、线性代数、概率统计、运筹、离散数学、应用数学、数值计算及基础数学。
- 信息类：编程、算法与数据结构、计算机组成/体系结构、数字逻辑、自动机与形式语言。

不收录电磁学、电路、信号处理、物理、化学、材料、生物等超出用户指定范围的科目。若一个选择科目同时包含自动机与计组，则保留在同一份正式题解中分节作答。

2025 年科目编号如下：

| 专攻 | 本次处理的科目 |
| --- | --- |
| 情報学 J | 必須 1 线性代数、必須 2 微积分；選択 1 算法与数据结构、2 概率/OR、3 离散数学、4 计算机工学 |
| 情報・ネットワーク I | 必須 1 线性代数、必須 2 微积分；選択 3 概率统计、5 算法与数据结构、6 计算机基础、7 数值计算、8 离散数学与自动机 |
| 機械知能 M | 数学必答题；選択 8 应用数学 |
| 基盤理工 S | 選択 6 基础数学 |

## 4. 核对与验证规则

1. 以官方 PDF 的可见题面为准；扫描 PDF 一律渲染后目视核对，不以 OCR 文本单独定稿。
2. 官方订正内容优先于原题面，并在本文件记录。
3. 2025 年逐小问比对官方解答例的结论、必要条件和关键推导；等价表达不要求与官方措辞一致。
4. 2021—2024 年无官方解答例，必须至少用一种独立方法复核：SymPy 精确化简/求解、数值代入、穷举、程序模拟或第二种手算推导。
5. 浮点近似同时保留足够精度，并检查题目要求的有效数字或误差界。
6. 正式题解采用日文考试答题风格，中文只作简短题意说明；验证脚本、OCR 疑点和过程日志只写在本审计文件。

## 5. 覆盖状态

状态含义：`官方核对`＝已逐问对照官方解答例；`独立验证`＝无官方解答，已由程序或第二推导复核；`待处理`＝尚未定稿。

| 实施年 | 入学年度目录 | 情報学 J | 情報・ネットワーク I | 機械知能 M | 基盤理工 S |
| --- | --- | --- | --- | --- | --- |
| 2025 | `2026/` | 本次范围完成并官方核对 | 本次范围完成并官方核对 | 本次范围完成并官方核对 | 基础数学完成并官方核对 |
| 2024 | `2025/` | 本次范围完成并独立验证 | 本次范围完成并独立验证 | 本次范围完成并独立验证 | 基础数学已独立验证 |
| 2023 | `2024/` | 本次范围完成并独立验证 | 本次范围完成并独立验证 | 本次范围完成并独立验证 | 基础数学已独立验证 |
| 2022 | `2023/` | 本次范围完成并独立验证 | 本次范围完成并独立验证 | 本次范围完成并独立验证 | 基础数学已独立验证 |
| 2021 | `2022/` | 本次范围完成并独立验证 | 本次范围完成并独立验证 | 本次范围完成并独立验证 | 基础数学已独立验证 |

仓库另有 2020 年 8 月情報学专攻的 7 份题解；该年份不在当前官网五年归档中，不计入上表。

## 6. 2025 年官方文件指纹

下列 SHA-256 用来固定本次核对所用的官方文件版本。

| 文件 | 页数 | SHA-256 |
| --- | ---: | --- |
| `kako_1_j_mandatory202508.pdf` | 4 | `7a89e3263541ac058531f387dc04ff5231f6a419f97446729815bb76d5553e2a` |
| `kako_2_j_choice202508.pdf` | 16 | `ba86fb7b25177977239b8abb7505e040b85dd60b23dbd7901ce1cc3f20b79be4` |
| `kako_1_j_answer202508.pdf` | 8 | `cf34af3a0df0cb2bbb1f83fe590986847a120e710e1484f7a20ab014073ecb1b` |
| `kako_3_i_mandatory202508.pdf` | 4 | `540d66ae1a3388c12c362b9a1f805462f9202d901371f15cd6509cf695001628` |
| `kako_4_i_choice202508.pdf` | 15 | `84bc7c5f6f7ce5c0a004586efe7c09697b1c37a27d4bef08cd937a19b21d8b1c` |
| `kako_2_i_answer202508.pdf` | 11 | `bcfeaab8f8e6e0904a6455ba6d699317c250374035e127493f26a84bec41783a` |
| `kako_5_m_mandatory202508.pdf` | 4 | `11e467d0849caefc997e1149448377aea40a78ca35e4857145ff2d5b41abf1e4` |
| `kako_7_m_choice202508.pdf` | 14 | `0a57bb8a95eaa3828da07afd628c2d64da6b88e3ca8475a7bd1e821dd14bb37a` |
| `kako_3_m_answer202508.pdf` | 13 | `477404464f6692d4174a1e7f183f7b7f81927d703bfde1a840c3df57cb60e20e` |
| `kako_8_s_choice202508.pdf` | 24 | `e2c4801ddecc2a38fefc0fb17cbabf8ad24ddb3c8e796167232d59cbe675cd29` |
| `kako_4_s_answer202508.pdf` | 11 | `e4a0d506ed61bd3fa4b819e5d1f6280c8c7fd85851b6b1d581db0bb424633a0e` |

## 7. 逐题核对记录

### 2025-08 情報学 J・必須数学

- 题面：`kako_1_j_mandatory202508.pdf` 的 PDF 第 3—4 页；官方解答：`kako_1_j_answer202508.pdf` 第 1 页。
- 线性代数的矩阵积、固有值和三维固有空间基底逐项与官方一致，并用 NumPy 复核。
- 微积分的法线、全部停留点/Hesse 分类和二重积分 $1/45$ 均与官方一致；变量代换后用数值积分复核。

### 2025-08 情報学 J・選択 1 算法与数据结构

- 题面：`kako_2_j_choice202508.pdf` 的 PDF 第 3—4 页；官方解答：`kako_1_j_answer202508.pdf` 第 2—4 页。
- 堆调整条件、两个指定堆数组、`min_pop` 与全输入复杂度、Top-$K$ 替换、中位数双堆状态及 E/F 全部与官方一致。
- 用 Python `heapq` 和逐指令模拟复现所有数组状态；复杂度倍率按题设的渐近模型复算。

### 2025-08 情報学 J・選択 2 概率/OR

- 题面：同一选择题 PDF 第 5—8 页；官方解答：同一答案 PDF 第 5—6 页。
- 随机游走的矩、CLT 近似、不相关但非独立的反例；指数分布的矩/MGF/无记忆性；作物规划 LP 及最优解均与官方一致。
- 对严格事件 $Y_{10000}>300$，官方主解给 $1-\Phi(3)=0.00135$，另注奇偶连续性修正 $1-\Phi(3.01)=0.00131$；正式题解采用官方主解。
- 用数值正态尾概率与有理数可行顶点枚举复核；LP 唯一最优解为 $(18/5,12/5,4)$，目标值 7360。

### 2025-08 情報学 J・選択 3 离散数学

- 题面：同一选择题 PDF 第 9—14 页；官方解答：同一答案 PDF 第 7 页。
- 命题/谓词逻辑选项、映射计数和复合性质、集合反例、鸽巢原理及取石策略均与官方一致。
- 官方取石题只写出归纳法开头；正式题解沿用官方的配对策略，补全“第 $2k$ 与 $2k+1$ 回合合取 $2k+1$ 个”的归纳步骤。
- 通过全真值表、有限映射/集合枚举和小规模游戏状态搜索独立核对。

### 2025-08 情報学 J・選択 4 计算机工学

- 题面：同一选择题 PDF 第 15—16 页；官方解答：同一答案 PDF 第 8 页。
- 八进制换算、全加器、8 位溢出界、缓存平均时间/最大失效率、DFA 及 CFG/连接语言均与官方一致。
- 穷举 8 位整数、长度受限字符串及 DFA 转移，独立复核最大值 51、四个受理串、12 条转移和 5 个连接语言候选。

### 2025-08 機械知能 M・必須数学

- 题面：`kako_5_m_mandatory202508.pdf` 的 PDF 第 3—4 页；官方解答：`kako_3_m_answer202508.pdf` 第 1—2 页。
- 问 1 的积分 $\pi(1-e^{-R})$、微分方程通解及初值答案均与官方一致；数值积分并逐点回代微分方程复核。
- 问 2 的 $c=16$、参数解、特征值/特征向量对角化及垂足向量式均与官方一致；以有理数精确运算验证方程组和 $AP=P\operatorname{diag}(2,2,3)$。

### 2025-08 機械知能 M・選択 8 応用数学

- 题面：`kako_7_m_choice202508.pdf` 的 PDF 第 13—14 页；官方解答：`kako_3_m_answer202508.pdf` 第 13 页。
- $z^2$ 的正则性、导数、两像曲线切线、两留数和余弦偶次幂积分均与官方答案一致。
- 官方极形式 Cauchy--Riemann 公式含 $1/r$，不能直接用于 $r=0$；正式题解在 $r>0$ 使用该公式，并另以差商证明原点可微。该补充不改变官方结论。
- 以复参数数值微分复核斜率 $-3,0$，并对 $n=0,\ldots,8$ 数值验证余弦幂积分公式。

### 2025-08 基盤理工 S・選択 6 基礎数学

- 题面：`kako_8_s_choice202508.pdf` 的 PDF 第 13—14 页；官方解答：`kako_4_s_answer202508.pdf` 第 6 页。
- 试卷第 24 页订正表只涉及科目 4、7、10，不影响科目 6。
- 矩阵乘积、特征值/三维特征空间、参数 $k=-7$、两个重积分、$|x|$ 的 Fourier 级数及奇数平方倒数和均逐项与官方一致。
- 用精确有理数程序复核矩阵和积分；对前 8 个 Fourier 系数作数值积分，并检查部分和收敛至 $\pi^2/8$。

### 2025-08 情報・ネットワーク I・必須数学

- 题面：`kako_3_i_mandatory202508.pdf` 的 PDF 第 3—4 页；官方解答：`kako_2_i_answer202508.pdf` 第 1—2 页。
- 线性代数的矩阵积、特征值 $3,-1,-1,-1$、三维特征空间、$k=-7$ 及表示矩阵逐项与官方一致；用 NumPy 和精确整数运算复核。
- 微积分的法线、三个停留点/Hesse 分类，以及三个二重积分 $1/45,4/15,\frac12\log2-\frac14$ 均与官方一致；变量代换后以数值积分交叉检查。

### 2025-08 情報・ネットワーク I・選択 3 確率統計

- 题面：`kako_4_i_choice202508.pdf` 的 PDF 第 6—7 页（卷面 No.4—5）；官方解答：`kako_2_i_answer202508.pdf` 第 5 页。
- 试题 PDF 第 15 页的订正将 Bayes 公式分子改为 $P(X=x\mid Q=q)f_Q(q)$；正式题解以订正后题面为准。
- 二项分布 MGF、期望/方差、最尤估计、Beta 后验、Beta-Binomial 预测分布及和的条件分布逐项与官方一致；以 Vandermonde 恒等式枚举和预测概率归一化复核。

### 2025-08 情報・ネットワーク I・選択 5—7

- 算法与数据结构（PDF 第 9 页、官方答案第 7 页）：Hamilton 闭路权重 18、Kruskal 最小生成树权重 7、下界与 2 近似证明均与官方一致；用闭路和边集穷举复核。
- 计算机基本原理（PDF 第 10—11 页、官方答案第 8 页）：LFSR 状态/周期、七段显示真值表和逻辑式、十进制计数连接条件均与官方一致；对全部非零初态和有效状态穷举。
- 数值计算（PDF 第 12—13 页、官方答案第 9—10 页）：中心差分、三点前向差分、四点二阶导数公式、舍入误差界和最优步长逐项一致；用有理数消元重算系数，并数值验证总误差极小值。

### 2025-08 情報・ネットワーク I・選択 8 離散数学とオートマトン

- 题面：`kako_4_i_choice202508.pdf` 的 PDF 第 14 页；官方解答：`kako_2_i_answer202508.pdf` 第 11 页。
- (1)、(2)、(4) 与官方一致；程序枚举复核同值关系和诱导双射。
- 官方 (3) 写成 $[(a,b)]=\{(ka,kb)\mid k\in\mathbb Z\setminus\{0\}\}$，对未约分的 $(a,b)$ 不成立，且与官方 (2) 的 $(2,4)\sim(1,2)$ 矛盾。正式题解令 $g=\gcd(|a|,|b|)$，改为 $\{(ka/g,kb/g)\mid k\in\mathbb Z\setminus\{0\}\}$；反例和修正式均经整数枚举验证。

### 2024-08 基盤理工 S・選択 6 基礎数学

- 题面：`kako_8_s_choice202408.pdf` 的 PDF 第 14 页（卷面 No.12）；渲染后逐式目视转录。
- 官方解答：无。
- 线性代数：用数值线性代数程序复核 $\boldsymbol a_3=9\boldsymbol a_1+5\boldsymbol a_2$、$\det A=0$，特征值数值为 $0,-8.605551\ldots,-1.394449\ldots$，与 $0,-5\pm\sqrt{13}$ 一致。
- 向量分析：数值积分复核体积与两种积分均为 $8\pi$；另以 Stokes 定理交叉检查曲面积分和线积分的方向。
- Fourier 系数：对 $10^6$ 个等距采样点作数值积分，$a_0,a_1,a_2,a_3,b_1,b_2,b_3$ 与闭式系数一致。

### 2024-08 機械知能 M・必須数学

- 题面：`kako_5_m_mandatory202408.pdf` 的 PDF 第 3—4 页（卷面 No.1—2）；渲染后逐式目视转录。
- 官方解答：无。
- 问 1：程序数值积分复核体积 $2/15$；将所得微分方程通解及其一、二阶导数回代原式，残差为零。另检查心形线三个候选点满足 $dx/d\theta=0,dy/d\theta\ne0$，尖点原点的局部展开给出水平切线。
- 问 2：用有理数 Gauss–Jordan 消元复核 $A^{-1}$；以精确排列式复核 $\det B=k-10$；数值计算核对 $Q^TQ=I$、$Q^TCQ=\operatorname{diag}(-2,2,4)$。

### 2024-08 機械知能 M・選択 8 応用数学

- 题面：`kako_7_m_choice202408.pdf` 的 PDF 第 16 页（卷面 No.14）；渲染后逐式目视转录。
- 官方解答：无。
- 复幂同时给出多值结果和主值，避免题面未指定对数支时产生歧义。
- 用复数数值代入复核反正弦恒等式的主支；以数值微分复核两项导数；沿 $|z|=1/2$ 作离散围道积分，结果与 $2\pi i$ 一致。

### 2024-08 情報学 J・必須数学

- 题面：`kako_1_j_mandatory202408.pdf` 的 PDF 第 3—4 页（卷面 No.1—2）；渲染后逐式目视转录。
- 官方解答：无。
- 线性代数：用多项式精确运算复核 $\det B=-2(c-3)(c+3)^2$ 及 $B(\boldsymbol a_1,\boldsymbol a_2)$ 的全部二阶子式；再以数值秩检查 $c=-3,3,2$，确认交集非零仅在 $c=-3$。
- 微积分：使用高密度嵌套梯形积分复核 $I_1=1/2$、$I_2=\frac\pi2\log\frac{2+\sqrt3}{\sqrt3}$；将隐函数导数公式代回 $f(x,\varphi(x))=0$ 的一、二阶导数恒等式核对。

### 2024-08 情報学 J・選択 4 計算機工学

- 题面：`kako_2_j_choice202408.pdf` 的 PDF 第 14—15 页（卷面 No.12—13）；渲染并局部放大后逐式目视转录。
- 官方解答：无。
- 4-1：用程序枚举到长度 7 的所有 $\{a,b\}$ 字符串，逐一核对三个 DFA 与语言定义；交叉检查文法生成式得到 $L_3=\{a^ib^jc^j\}$、$L_4=\{a^ib^ic^j\}$，故交集为经典非上下文无关语言 $\{a^nb^nc^n\}$。
- 4-2：穷举全部布尔输入复核逻辑化简与四 NAND 实现；程序遍历 8 种起始块内偏移，1001 个连续字节均跨越 126 个块，故命中率恒为 $875/1001$。指令周期总数与 CPI 用独立脚本复算。

### 2024-08 情報学 J・選択 2 確率・OR

- 题面：`kako_2_j_choice202408.pdf` 的 PDF 第 5—7 页（卷面 No.3—5）；渲染后逐表格、公式目视转录。
- 官方解答：无。
- 抽签题以联合概率表直接求和，复核三个条件期望及 $a=2,3,4,\ge5$ 的最优颜色；正态题重算箱重均值 2300、标准差 41 和双侧 $3\sigma$ 尾概率 $0.002699796\ldots$。
- Erlang 密度用卷积归纳复核；线性规划既以有理数 simplex 表重算，又枚举全部可行顶点，确认最优点 $(20/3,0,110/3)$、目标值 $200/3$。

### 2024-08 情報学 J・選択 3 離散数学

- 题面：同一选择题 PDF 第 8—13 页（卷面 No.6—11）；官方解答：无。
- 三个推理式分别穷举全部真值赋值；集合题在小有限全集上枚举全部子集；映射题枚举有限集合间的全射，均与正式题解的空栏和结论一致。
- De Morgan 法则除书面归纳证明外，还在 4 元全集上对 $2\le n\le5$ 的集合族全枚举检查。

### 2024-08 情報・ネットワーク I・必須数学

- 题面：`kako_3_i_mandatory202408.pdf` 的 PDF 第 3—4 页（卷面 No.1—2）；官方解答：无。
- 线性代数以有理数列消元、行列式因式分解和核/像联立复核；确认非零交空间仅在 $c=-3$，基底为 $(1,1,-1)^T$。
- 微积分题连续两次隐式微分并以约束参数 $u=y-x$ 复核极值范围；三个二重积分均以变量代换解析计算和数值积分交叉检查，结果为 $1/2,\pi^2/12,\log2/30$。

### 2024-08 情報・ネットワーク I・選択 3 確率統計

- 题面：`kako_4_i_choice202408.pdf` 的 PDF 第 5 页（卷面 No.3）；官方解答：无。
- 由正态混合分布 MGF 重算均值、方差和仿射变换；对权重的一元二次函数作导数与端点比较，得到 $\sigma=\sqrt2$ 两侧的最大值分段。
- 正态尺度参数的对数似然直接求导，独立同分布和的 MGF 用乘法性复核。

### 2024-08 情報・ネットワーク I・選択 5—7

- 算法与数据结构（PDF 第 7—8 页）：递归/非递归中序遍历逐步模拟，实际构造指定 BST；对五个键用区间动态规划和根节点全枚举交叉检查，唯一最优根为 14，成本 27。
- 计算机基本原理（PDF 第 9—10 页）：穷举优先编码器全部 8 种输入，并模拟 Moore 状态机；确认次态式 $A^+=RB$、$B^+=R\bar A\bar B$ 和输出周期 $1,0,0$。
- 数值计算（PDF 第 11 页）：精确解初始特征向量系数，独立推导系数比递推；运行 24 次无穷范数归一化幂迭代，Rayleigh 商为 $4.23606797749979$，与 $2+\sqrt5$ 一致。

### 2024-08 情報・ネットワーク I・選択 8 離散数学とオートマトン

- 题面：同一选择题 PDF 第 12 页（卷面 No.10）；官方解答：无。
- 命题真值表、$R_1$ 的 9 个元素分组及 $R_2$ 的被覆边全部枚举复核。
- 九个语言先对小长度二进制串穷举，再分别以闭包性质、有限并或泵引理证明；判定为 $(\circ,\circ,\times,\circ,\circ,\times,\times,\times,\circ)$。

### 2023-08 機械知能 M・必須数学

- 题面：`kako_m_mandatory202308.pdf` 的 PDF 第 3—4 页（卷面 No.1—2）；渲染后逐式目视转录。
- 官方解答：无。
- 问 1：精确计算 Hesse 行列式与停留点，分片积分复核 $\iint_D(2x-y)\,dx\,dy=3/8$；将 $e^{2x}(x^3+C_1x+C_2)$ 及其导数回代原方程，残差为零。
- 问 2：用 Python `Fraction` 和 Gauss--Jordan 消元复核两逆矩阵、$C$ 的 RREF/核/像；数值检查所给 $P$ 正交且 $P^TDP=\operatorname{diag}(1,1,7)$。

### 2023-08 機械知能 M・選択 8 応用数学

- 题面：`kako_m_choice202308.pdf` 的 PDF 第 16—17 页（卷面 No.14—15）；官方解答：无。
- 由 Cauchy 公式独立得到 $f(z)=2z+1$；多组复参数 $a$ 数值积分均为 2，与原始函数法一致。
- 对 Möbius 变换显式计算实部、虚部和逆变换，并以数值微分复核 Jacobian $4/((1+x)^2+y^2)^2$。

### 2023-08 基盤理工 S・選択 6 基礎数学

- 题面：`kako_s_choice202308.pdf` 的 PDF 第 14—15 页（卷面 No.12—13）；官方解答：无。
- 以精确排列式、矩阵乘法和线性方程复核 $\det A=9$、两个固有向量、$P_3=-5P_1+2P_2$、$P_4=(3,1,2,1)^T$ 及三条矩阵幂公式。
- Green 定理两侧分别积分得到线积分 9，重积分为 0；单位球上的散度体积分和直接曲面积分分别为 $4\pi/3$、$4\pi$，并以散度定理交叉检查后者。

### 2023-08 情報学 J・本次范围

- 题面：`kako_j_mandatory202308.pdf` 第 3—4 页及 `kako_j_choice202308.pdf` 第 3—14 页；全部扫描页均渲染目视核对，计算机工学 4-2 的多重横线以 600 dpi 再核。官方解答：无。
- 必须数学用精确矩阵乘法、特征分解、符号积分及数值二重积分复核；所得第 4 分量为 $5\cdot3^n-6(-1)^n$，两积分为 $3\log3-4\log2$ 与 $\pi/3-\sqrt3/4$。
- 概率/OR 的正态样本、条件指数分布和 LP 均以符号积分、条件矩及有理数顶点/单纯形表交叉检查，LP 最优解为 $(21,12)$，灵敏度范围为 $-25\le\alpha\le50$。
- 离散数学的逻辑式、映射计数及组合不等式以真值表、有限映射枚举和数值边界抽查复核。算法题沿用仓库既有题解，并重新对照题面。
- 计算机工学的前缀 DFA、素数长度语言泵引理、数表现、缓存和性能式共执行 2,104 条程序断言；所有结果通过。

### 2023-08 情報・ネットワーク I・本次范围

- 题面：`kako_i_mandatory202308.pdf` 第 3—4 页及 `kako_i_choice202308.pdf` 第 5、7—12 页；扫描页以 200 dpi 渲染并目视核对。官方解答：无。
- 必须数学以 SymPy/精确有理数复核行列式、核与像、特征向量、二重积分和 Riemann 和；结果包括 $\det A=9$、$A^np_3$ 的闭式及 $\log(27/16)$。
- 概率统计的指数分布矩、MLE 和最大次序统计量条件密度均作符号归一化检查。
- Prim/MST 题由生成树穷举与随机图交叉验证，动态更新算法补全割性质证明；计算机基本原理对全部 5 位补码和 3 位状态穷举；Jacobi 法用精确迭代和随机严格对角优位系统复核。
- 离散数学题穷举 $A^3$ 的 64 个三元组及小规模全部映射，确认集合分割和映射计数公式。

### 2022-08 機械知能 M・本次范围

- 题面：`kako_m_mandatory202208.pdf` 第 3—4 页及 `kako_m_choice202208.pdf` 第 16—17 页；渲染后逐式目视核对。官方解答：无。
- 既有必答问 1 与题面一致；符号微分、数值积分和微分方程回代均通过。
- 必答问 2 以精确消元复核 $\dim\ker F=2$、像空间单位化基、参数方程组仅在 $a=\pm1$ 时有唯一解，以及对角化条件 $b\ne9$。
- 应用数学以 Cauchy--Riemann 方程、留数数值积分、参数线积分和 Fourier 数值积分复核；结果包括 $\pi\cosh1/2$ 与 $9\pi^2/4$。

### 2022-08 基盤理工 S・選択 6 基礎数学

- 题面：`kako_s_choice202208.pdf` 第 14 页；渲染后逐式目视核对。官方解答：无。
- 精确计算复核特征多项式 $(\lambda-1)^2(\lambda-3)$ 和仅在 $a=-3$ 时可对角化；Hesse 检验、极坐标积分和微分方程回代分别确认极小值 $-e^{-2}$、积分 $2\pi^2$ 及两组通解。

### 2022-08 情報学 J・本次范围

- 题面：`kako_j_mandatory202208.pdf` 第 3—4 页及 `kako_j_choice202208.pdf` 第 3—15 页；19 页扫描件以 220 dpi 全部渲染并目视核对。官方解答：无。
- 必须数学用精确行列式、秩、Taylor 系数、Hesse 检验和数值积分复核；算法题穷举 24 种 BST 插入顺序并逐步模拟全部旋转。
- 概率/OR 的密度、Poisson 尾概率、停止时刻和四张 Simplex 表均独立重算；最优解为 $(2/5,6/5,3)$，目标值 $169/5$。
- 题面用双侧 Chebyshev 不等式可得返还量不超过 $5a/2$；一侧 Cantelli 界可加强为 $2a$。正式题解按课程预期给出前者，差异只记在本审计中。
- 离散数学的基数证明隐含有限集合前提；无限集合下严格包含也可能等势。正式题解明确补上有限性，不把原命题扩张到无限集。
- DFA/文法、65,536 个循环移位值、全加器、CPI 和缓存均经穷举或精确程序复核。

### 2022-08 情報・ネットワーク I・本次范围

- 题面：`kako_i_mandatory202208.pdf` 第 3—4 页及 `kako_i_choice202208.pdf` 第 5、7—12 页；扫描页以 200 dpi 渲染并目视核对。官方解答：无。
- 必须数学以 Fraction/NumPy 和数值积分复核特征分解、矩阵幂、Taylor 系数、极值及三个积分；概率统计另处理样本和为零时 MLE 只在边界取上确界的情形。
- 堆、Dijkstra 与先行顶点数组由标准实现及简单路径穷举交叉检查；年号加减电路对全部合法 7 位输入穷举。
- Newton 法的单调性、二次收敛常数和有效数字结论以解析误差式及数值比值复核。
- square 语言先穷举到长度 14，再对所构造 DFA 检查长度 9 以下全部输入；无限 square 语言的非正则性证明同时检查奇偶长度和两个 `1` 的位置。

### 2021-08 情報・ネットワーク I・本次范围

- 题面：`kako_i_mandatory202108.pdf` 第 3—4 页及 `kako_i_choice202108.pdf` 第 5、7—13 页；全目标页以 180 dpi 目视核对。官方解答：无。
- 线性代数、微积分、Gamma/指数分布、积分和 MLE 以 SymPy、精确运算与数值积分复核。
- 循环队列、邻接表和 BFS 由程序模拟；Mealy 电路对长度 1—7 的全部输入及题面 16 周期序列穷举，确认三状态与四状态机器的最小实现和逻辑式。
- 显式/隐式 Euler 的复平面稳定域逐点数值抽查；正式题解另区分右半平面大步长造成的“数值衰减”与增长型精确解。
- 映射、满射及二项关系计数对 $n=1,\ldots,4$ 全枚举。共 28 组、21,391 个程序断言通过。

### 2021-08 情報学 J・本次范围

- 题面：`kako_j_mandatory202108.pdf` 第 3—4 页及 `kako_j_choice202108.pdf` 第 3—13 页；扫描页以 180 dpi 渲染逐页目视核对，归纳不等式另作高分辨率局部检查。官方解答：无。
- 必须数学以特征多项式、Cayley--Hamilton 直接代入、Hesse 检验和数值积分复核；结果为固有值 $3,1,-3$、极小值 $-103$、切线 $5x-6y+13=0$ 及积分 $20\pi\log2-6\pi$。
- 算法题逐语句模拟最大堆调整、建堆与堆排序；概率/OR 以分布公式、区域积分和可行顶点/对偶互补条件复核。
- 离散数学通过集合枚举、完整真值表和 $n=1,\ldots,99$ 的不等式抽查；空栏结果与证明一致。
- 计算机工学枚举文法生成列及长度不超过 8 的全部 DFA 输入；数表现、缓存、NAND/NOR 和多数决逻辑均由程序穷举，全部通过。

### 2021-08 機械知能 M・必須数学

- 题面：`kako_m_mandatory202108.pdf` 的 PDF 第 3—4 页（卷面 No.1—2）；第 5—7 页为物理，未纳入。官方解答：无。
- 问 1：线性变量代换后独立数值积分复核结果 $\pi\log2/8-(\log2)^2/4$；Bernoulli 方程和二阶方程的通解均连同导数回代，残差为零。
- 问 2：对多组整数 $a$ 和 $n=3,4,7$ 直接做矩阵乘幂，验证 $P^n=O$ 及 $Q^n$ 的闭式；以秩条件复核 $a=9,b=-1$，并数值检查 $P^TP=I$、$P^TAP=\operatorname{diag}(2,1,-1)$。

### 2021-08 機械知能 M・選択 8 応用数学

- 题面：`kako_m_choice202108.pdf` 的 PDF 第 17—18 页（卷面 No.15—16）；官方解答：无。
- 对 $a>0,a=0,a<0$ 分别用上半平面留数、对称积分、下半平面围道复核，得到阶跃函数；其导数明确按超函数解释为 Dirac $\delta$。
- Laurent 系数在单位圆上参数化后，以周期对称性核对 Bessel 实积分表示。
- 对多组半径和角度数值代入 Joukowski 变换，椭圆方程与双曲线不变量的残差均小于 $10^{-10}$。

### 2021-08 基盤理工 S・選択 6 基礎数学

- 题面：`kako_s_choice202108.pdf` 的 PDF 第 13 页（卷面 No.11）；官方解答：无。
- 用 NumPy 和精确多项式计算复核固有值 $3,1,-3$、Cayley--Hamilton 关系，以及
  $$
  A^{15}-4A^{14}+3A^{13}
  =4(-3)^{13}
  \begin{pmatrix}1&-2&1\\-2&4&-2\\1&-2&1\end{pmatrix}.
  $$
- 梯度/Hesse 检验确认唯一极小值为 $-103$；两重积分分别以极坐标和线性代换解析计算，并用数值积分交叉检查为 $20\pi\log2-6\pi$、$19/9$。
