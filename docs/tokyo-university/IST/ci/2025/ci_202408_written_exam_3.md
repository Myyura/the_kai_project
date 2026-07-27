---
sidebar_label: 2024年8月実施 筆記試験 第3問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Radix-Sort
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2024年8月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines. If necessary, use examples, figures or equations.

1. **Radix sort**
2. **L-value and R-value in programming languages**
3. **Model checking**
4. **Quasi-Newton method**
5. **Bayesian networks**
6. **Marching cubes method**
7. **Types of optical distance sensors (at least two) and their principles**
8. **Cryptographic hash function**

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例、图或公式。

1. 基数排序。
2. 程序语言中的左值与右值。
3. 模型检测。
4. 拟牛顿法。
5. 贝叶斯网络。
6. Marching Cubes 方法。
7. 至少两类光学测距传感器及其原理。
8. 密码学哈希函数。

#### 考点

- **基数排序**：说明按各位稳定分配、多趟处理整数或字符串键的线性型排序。
- **左值与右值**：比较可标识存储位置、可被赋值的表达式与只表示计算值的表达式。
- **模型检测**：说明穷举有限状态系统验证时序逻辑性质并给出反例。
- **拟牛顿法**：说明用梯度变化近似 Hessian 或其逆以迭代优化。
- **贝叶斯网络**：说明有向无环依赖图、条件概率分解与推断。
- **Marching Cubes**：说明遍历体素立方体、按等值面交点模板生成三角网格。
- **光学测距**：至少比较两种如三角测量、飞行时间、相位差方法的发射、接收和距离计算原理。
- **密码学哈希**：说明固定长度摘要、抗原像与抗碰撞性质及完整性用途。

## **Kai**
**Radix Sort**
A sorting algorithm that sort strings or numbers from lower to higher digit places. In the $i$-th step in the loop, the algorithm calls a counting sort distributing $i$-th digit into ordered buckets. The time complexity is $O(d(n+k))$ where $n$ is the array length, $d$ is the number of digits of the maximum number, and $k$ is the base or the length of symbols.
