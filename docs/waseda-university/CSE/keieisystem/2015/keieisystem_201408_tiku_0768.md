---
sidebar_label: "2014年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2つの変数対 $(x, y)$ に関して $n=3$ のデータが表1に与えられている。相関係数(correlation coefficient)を求めよ。

表1 データ

### 题目描述

关于变量对 $(x,y)$，原题说明表 1 给出了 $n=3$ 组数据，要求计算相关系数。

现有原始题面只保留了“表 1 数据”的引用，表格本身缺失；Kai 中唯一给出的三组数据为

| 编号 | $x$ | $y$ |
|---|---:|---:|
| 1 | 2 | 3 |
| 2 | 4 | 3 |
| 3 | 6 | 6 |

以下仅按这三组可恢复的数据求相关系数，不补入其他表格信息。

## **Kai**

相関係数 $r$ は以下の式で計算できます。

$$
r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2} \sqrt{\sum_{i=1}^{n}(y_i - \bar{y})^2}}
$$

まず、それぞれの平均値を計算します。

$$
\bar{x} = \frac{2 + 4 + 6}{3} = \frac{12}{3} = 4
$$

$$
\bar{y} = \frac{3 + 3 + 6}{3} = \frac{12}{3} = 4
$$

次に、各データの偏差を計算します。

| No. | $x_i$ | $y_i$ | $x_i - \bar{x}$ | $y_i - \bar{y}$ | $(x_i - \bar{x})(y_i - \bar{y})$ | $(x_i - \bar{x})^2$ | $(y_i - \bar{y})^2$ |
|---|---|---|---|---|---|---|---|
| 1 | 2 | 3 | -2 | -1 | 2 | 4 | 1 |
| 2 | 4 | 3 | 0 | -1 | 0 | 0 | 1 |
| 3 | 6 | 6 | 2 | 2 | 4 | 4 | 4 |

それぞれの合計を計算します。

$$
\sum_{i=1}^{3}(x_i - \bar{x})(y_i - \bar{y}) = 2 + 0 + 4 = 6
$$

$$
\sum_{i=1}^{3}(x_i - \bar{x})^2 = 4 + 0 + 4 = 8
$$

$$
\sum_{i=1}^{3}(y_i - \bar{y})^2 = 1 + 1 + 4 = 6
$$

相関係数 $r$ を計算します。

$$
r = \frac{6}{\sqrt{8} \sqrt{6}} = \frac{6}{\sqrt{48}} = \frac{6}{4\sqrt{3}} = \frac{3}{2\sqrt{3}} = \frac{3\sqrt{3}}{2 \times 3} = \frac{\sqrt{3}}{2} \approx 0.866
$$

したがって、相関係数は $\frac{\sqrt{3}}{2}$ です。
