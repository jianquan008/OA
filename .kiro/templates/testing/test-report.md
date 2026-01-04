# 测试报告

## 概览
- **Feature**: [功能名称]
- **测试时间**: [YYYY-MM-DD HH:mm]
- **结果**: ✅ 通过 / ❌ 失败
- **通过率**: X/Y (Z%)

## 测试环境

| 配置项 | 值 |
|--------|-----|
| 测试地址 | http://localhost:5173 |
| 浏览器 | Chrome (headless) |
| 测试用例文件 | test-cases.md |

## 测试结果

| Case ID | Case Name | 关联需求 | Result | Screenshot |
|---------|-----------|----------|--------|------------|
| TC-001 | [用例名称] | AC1.1 | ✅ Pass | TC001-01-xxx.png |
| TC-002 | [用例名称] | AC1.2 | ❌ Fail | TC002-01-xxx.png |

## 测试用例执行详情

### TC-001: [用例名称]
- **状态**: ✅ 通过
- **关联需求**: FR-001 / AC1.1

| 步骤 | 操作 | 预期结果 | 实际结果 | 截图 |
|------|------|----------|----------|------|
| 1 | [操作] | [预期] | ✅ 符合预期 | ![](TC001-01-xxx.png) |
| 2 | [操作] | [预期] | ✅ 符合预期 | ![](TC001-02-xxx.png) |

### TC-002: [用例名称]
- **状态**: ❌ 失败
- **关联需求**: FR-001 / AC1.2
- **失败原因**: [具体错误信息]
- **截图**: ![](TC002-error.png)

## 问题汇总

| 问题 | 严重程度 | 关联用例 | 建议 |
|------|----------|----------|------|
| [问题描述] | High/Medium/Low | TC-002 | [修复建议] |

## 总结

| Metric | Value |
|--------|-------|
| Total Cases | [N] |
| Passed | [X] |
| Failed | [Y] |
| Pass Rate | [X/N]% |

## 建议

- [建议1]
- [建议2]

## 结论
<!-- TEST_RESULT: PASS -->  或  <!-- TEST_RESULT: FAIL -->

<!-- TEST_SUMMARY（Feature 测试模式必须）
{
  "total": 5,
  "passed": 3,
  "failed": 2,
  "result": "FAIL",
  "failed_cases": [
    {
      "id": "TC-002",
      "name": "用例名称",
      "error": "具体错误信息",
      "error_type": "selector_not_found",
      "suggestion": "修复建议"
    }
  ]
}
-->
