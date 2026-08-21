---
sidebar_label: "2021年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Marginal-Densities-and-Independence-Test
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

5行4列の分割表(contingency table)に基づき、カイ2乗分布近似(chi-square distribution approximation)により行属性と列属性に関する独立性の検定(test for independence)を行うとする。このとき、自由度(degrees of freedom)はいくらになるか。

### 题目描述

基于一个 $5$ 行 $4$ 列的列联表，使用卡方分布近似检验行属性与列属性的独立性。求该独立性检验的自由度。

## **Kai**

分割表における独立性の検定における自由度(degrees of freedom)は、以下のように計算されます。

自由度 = (行数 - 1) × (列数 - 1)

この問題では、行数は5、列数は4なので、

自由度 = (5 - 1) × (4 - 1) = 4 × 3 = 12

したがって、自由度は12です。
