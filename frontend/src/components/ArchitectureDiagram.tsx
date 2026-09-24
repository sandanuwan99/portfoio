'use client';

import React, { useState } from 'react';
import { Database, Server, Cpu, Globe, Shield, Terminal, Activity, GitBranch, ArrowDown, CheckCircle2 } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

interface ArchitectureTier {
  id: string;
  name: string;
  subName: string;
  tech: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  responsibilities: string[];
  codeSample: {
    code: string;
    language: string;
    filename: string;
  };
}

const TIERS: ArchitectureTier[] = [
  {
    id: 'frontend',
    name: 'Frontend Presentation Tier',
    subName: 'Type-Safe App Router & Client Components',
    tech: 'Next.js 16 • React 19 • TypeScript • Tailwind CSS',
    icon: <Globe className="w-5 h-5 text-sky-400" />,
    color: 'border-sky-500/40 bg-sky-950/20 text-sky-300',
    description:
      'Responsive, server-side rendered and client-interactive user interface built with Next.js App Router. Features strict TypeScript types, optimistic UI updates, component modularity, and accessible semantic markup.',
    responsibilities: [
      'Declarative state management and reactive user interactions',
      'Client-side form input validation mirroring backend constraints',
      'Responsive data presentation with accessible ARIA landmarks',
      'Optimistic mutations with fast feedback and error boundaries',
    ],
    codeSample: {
      filename: 'src/services/policyApi.ts',
      language: 'typescript',
      code: `// Type-safe API consumer in Next.js
export async function submitPolicy(data: CreatePolicyInput): Promise<ApiResponse<PolicyDto>> {
  const response = await fetch('/api/policies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorJson = await response.json();
    throw new ApiValidationError(errorJson.fieldErrors);
  }
  return response.json();
}`,
    },
  },
  {
    id: 'rest-api',
    name: 'REST API & Gateway Tier',
    subName: 'Contract Enforcement & Error Envelopes',
    tech: 'HTTP/2 • JSON REST • RFC 7807 • Spring Security',
    icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    color: 'border-indigo-500/40 bg-indigo-950/20 text-indigo-300',
    description:
      'Standardized RESTful HTTP boundary enforcing Richardson Maturity Model Level 2/3. All payloads are encapsulated in standardized JSON envelopes with RFC 7807 ProblemDetail error reporting.',
    responsibilities: [
      'Stateless request authentication and token evaluation',
      'CORS header negotiation and security headers',
      'Uniform ApiResponse<T> response structuring',
      'HTTP status code discipline (200, 201, 400, 403, 404, 409, 500)',
    ],
    codeSample: {
      filename: 'ApiResponse.java',
      language: 'java',
      code: `// Standardized enterprise API envelope
public class ApiResponse<T> {
    private boolean success;
    private String message;
    private T data;
    private LocalDateTime timestamp = LocalDateTime.now();

    public static <T> ApiResponse<T> ok(T data) {
        return new ApiResponse<>(true, "Success", data, LocalDateTime.now());
    }
}`,
    },
  },
  {
    id: 'controller',
    name: 'Spring Boot Controller Tier',
    subName: 'Request Routing & Jakarta Input Validation',
    tech: '@RestController • @Valid • Jakarta Validation',
    icon: <Server className="w-5 h-5 text-blue-400" />,
    color: 'border-blue-500/40 bg-blue-950/20 text-blue-300',
    description:
      'Thin HTTP dispatchers responsible exclusively for routing endpoints, deserializing JSON into validated DTOs, and delegating execution to the Service tier. Zero business logic is allowed in controllers.',
    responsibilities: [
      'Input validation via @Valid and Jakarta constraint annotations',
      'Extracting path parameters, query strings, and auth headers',
      'Delegating domain operations to dedicated Service interfaces',
      'Returning ResponseEntity with semantic HTTP status codes',
    ],
    codeSample: {
      filename: 'PolicyController.java',
      language: 'java',
      code: `@RestController
@RequestMapping("/api/v1/policies")
@RequiredArgsConstructor
public class PolicyController {
    private final PolicyService policyService;

    @PostMapping
    public ResponseEntity<ApiResponse<PolicyResponseDto>> createPolicy(
            @Valid @RequestBody CreatePolicyRequest request) {
        PolicyResponseDto created = policyService.createPolicy(request);
        return new ResponseEntity<>(ApiResponse.ok("Policy created", created), HttpStatus.CREATED);
    }
}`,
    },
  },
  {
    id: 'service',
    name: 'Service & Domain Business Tier',
    subName: 'Transaction Boundaries & Business Rules',
    tech: '@Service • @Transactional • Domain Models',
    icon: <Terminal className="w-5 h-5 text-emerald-400" />,
    color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300',
    description:
      'The core heart of the enterprise application. Manages business invariants, orchestration between entities, transaction management (@Transactional), DTO mapping, and audit logging.',
    responsibilities: [
      'Enforcing core business rules and status transitions',
      'Declarative ACID transaction boundaries with proper isolation',
      'Mapping between internal JPA Entities and client DTOs',
      'Orchestrating calls to reporting engines (Apache POI, OpenPDF)',
    ],
    codeSample: {
      filename: 'PolicyServiceImpl.java',
      language: 'java',
      code: `@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PolicyServiceImpl implements PolicyService {
    private final PolicyRepository policyRepository;
    private final PolicyMapper policyMapper;

    @Override
    @Transactional(isolation = Isolation.READ_COMMITTED)
    public PolicyResponseDto approvePolicy(Long id, UnderwriterNotes notes) {
        PolicyEntity policy = policyRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Policy", "id", id));
        policy.approve(notes);
        return policyMapper.toDto(policyRepository.save(policy));
    }
}`,
    },
  },
  {
    id: 'repository',
    name: 'Repository & Persistence Tier',
    subName: 'Spring Data JPA & Custom Queries',
    tech: 'Spring Data JPA • Hibernate • JPQL • Projections',
    icon: <Activity className="w-5 h-5 text-amber-400" />,
    color: 'border-amber-500/40 bg-amber-950/20 text-amber-300',
    description:
      'Data access abstraction encapsulating query generation, pagination, projections, and entity lifecycle. Isolates the service layer from SQL dialects and ORM specifics.',
    responsibilities: [
      'Type-safe query methods and dynamic JPA Specifications',
      'Optimistic locking (@Version) and pessimistic write locks',
      'High-performance readonly query projections',
      'Invoking native T-SQL stored procedures for batch operations',
    ],
    codeSample: {
      filename: 'PolicyRepository.java',
      language: 'java',
      code: `@Repository
public interface PolicyRepository extends JpaRepository<PolicyEntity, Long> {
    List<PolicyEntity> findByStatusOrderByCreatedAtDesc(PolicyStatus status);

    @Query("SELECT p FROM PolicyEntity p JOIN FETCH p.client WHERE p.policyNumber = :number")
    Optional<PolicyEntity> findByPolicyNumberWithClient(@Param("number") String number);

    @Procedure(procedureName = "sp_GetMonthlyUnderwritingSummary")
    List<UnderwritingSummaryDto> executeMonthlySummary(@Param("StartDate") LocalDate start);
}`,
    },
  },
  {
    id: 'database',
    name: 'Enterprise Persistence Engine',
    subName: 'Microsoft SQL Server Relational Database',
    tech: 'MS SQL Server 2022 • T-SQL • Clustered Indexes • Stored Procs',
    icon: <Database className="w-5 h-5 text-rose-400" />,
    color: 'border-rose-500/40 bg-rose-950/20 text-rose-300',
    description:
      'Enterprise relational database providing ACID compliance, foreign key integrity, clustered indexes on primary business keys, covering non-clustered indexes, and high-performance T-SQL stored procedures for analytics.',
    responsibilities: [
      'Data persistence with ACID transaction guarantees',
      'Targeted non-clustered covering indexes preventing costly table scans',
      'Stored procedures for high-volume financial accounting aggregates',
      'Audit logging and temporal history tracking',
    ],
    codeSample: {
      filename: 'schema-optimization.sql',
      language: 'sql',
      code: `-- Microsoft SQL Server Covering Non-Clustered Index
CREATE NONCLUSTERED INDEX IX_policies_status_effective_date
ON dbo.policies (status, effective_date)
INCLUDE (policy_number, underwriter_id, premium_amount)
WITH (FILLFACTOR = 90, DATA_COMPRESSION = PAGE);`,
    },
  },
];

const CROSS_CUTTING_CONCERNS = [
  {
    title: 'Input Validation',
    badge: 'Jakarta Validation',
    description:
      'Strict server-side validation using @NotNull, @Size, @Pattern, and custom validators. Errors mapped to localized field keys.',
  },
  {
    title: 'Global Exception Handling',
    badge: '@RestControllerAdvice',
    description:
      'Centralized exception interception providing RFC 7807 compliant error responses without leaking stack traces or credentials.',
  },
  {
    title: 'Enterprise Security',
    badge: 'Spring Security & RBAC',
    description:
      'Stateless session management, fine-grained Role-Based Access Control, CORS whitelisting, and SQL injection prevention via parameterized queries.',
  },
  {
    title: 'Logging & Observability',
    badge: 'SLF4J / Logback',
    description:
      'Structured diagnostic logging with correlation IDs, transaction timing, and integration with Azure / Docker container log streams.',
  },
  {
    title: 'Automated Testing',
    badge: 'JUnit 5 & Mockito',
    description:
      'Unit testing covering domain logic, Mockito for service isolation, @DataJpaTest for query validation, and Postman API regression suites.',
  },
  {
    title: 'CI/CD Pipelines',
    badge: 'Azure DevOps & Docker',
    description:
      'Automated multi-stage build pipelines running test gates, multi-stage Docker container builds, and zero-downtime rolling slot deployments.',
  },
];

export function ArchitectureDiagram() {
  const [activeTierId, setActiveTierId] = useState<string>('controller');
  const activeTier = TIERS.find((t) => t.id === activeTierId) || TIERS[2];

  return (
    <div className="space-y-10">
      {/* Tier Flow Navigator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Architecture Flow Column */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
            <span>Multi-Tier Architecture Flow</span>
            <span className="text-sky-400">Click layer to inspect</span>
          </div>

          {TIERS.map((tier, idx) => {
            const isSelected = tier.id === activeTierId;
            return (
              <React.Fragment key={tier.id}>
                <button
                  type="button"
                  onClick={() => setActiveTierId(tier.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? `${tier.color} shadow-lg ring-1 ring-sky-500/40`
                      : 'border-slate-800/80 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                      {tier.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-100 flex items-center gap-2">
                        {tier.name}
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                        )}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 truncate max-w-[200px] sm:max-w-[260px]">
                        {tier.tech}
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-slate-500 flex-shrink-0">
                    L{idx + 1}
                  </span>
                </button>

                {idx < TIERS.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right: Selected Layer Deep Dive */}
        <div className="lg:col-span-7 glass-surface rounded-2xl p-6 md:p-8 border border-slate-800 bg-[#0a0e1c] shadow-2xl space-y-6">
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950/80 text-sky-400 border border-sky-800/60 uppercase">
                  Active Architectural Tier
                </span>
                <span className="text-xs font-mono text-slate-400">{activeTier.tech}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">{activeTier.name}</h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">{activeTier.subName}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">Description &amp; Design Rationale</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{activeTier.description}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2.5">Key Responsibilities</h4>
            <div className="grid grid-cols-1 gap-2">
              {activeTier.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-1">
              Production Implementation Snippet
            </h4>
            <CodeBlock
              code={activeTier.codeSample.code}
              language={activeTier.codeSample.language}
              filename={activeTier.codeSample.filename}
            />
          </div>
        </div>
      </div>

      {/* Cross-Cutting Concerns Grid */}
      <div className="pt-6 border-t border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-wider bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full">
            Enterprise Reliability Foundations
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-100 mt-2">
            Cross-Cutting Engineering Concerns
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Production systems require uncompromising rigor across security, validation, observability, and deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CROSS_CUTTING_CONCERNS.map((item, idx) => (
            <div
              key={idx}
              className="glass-surface p-5 rounded-xl border border-slate-800/80 bg-slate-900/30 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-slate-100">{item.title}</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                  {item.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
