// Simulated database schema — all objects and their fields
const DB_SCHEMA = {
  "Meeting": {
    label: "Meeting",
    fields: [
      { key: "meeting_id", type: "string", label: "Meeting ID" },
      { key: "session", type: "string", label: "Session" },
      { key: "body", type: "string", label: "Body" },
      { key: "meeting_number", type: "string", label: "Meeting Number" },
      { key: "meeting_type", type: "enum", label: "Meeting Type", values: ["plenary", "formal", "informal", "resumed"] },
      { key: "presiding_officer", type: "string", label: "Presiding Officer" },
      { key: "scheduled_start", type: "datetime", label: "Scheduled Start" },
      { key: "actual_start", type: "datetime", label: "Actual Start" },
      { key: "actual_end", type: "datetime", label: "Actual End" },
      { key: "status", type: "enum", label: "Status", values: ["scheduled", "open", "suspended", "closed"] },
      { key: "venue", type: "string", label: "Venue" },
      { key: "webcast_url", type: "string", label: "Webcast URL" },
    ]
  },
  "AgendaItem": {
    label: "Agenda Item",
    fields: [
      { key: "item_number", type: "string", label: "Item Number" },
      { key: "title", type: "string", label: "Title" },
      { key: "sub_item", type: "string", label: "Sub-item" },
      { key: "committee", type: "string", label: "Committee" },
      { key: "status", type: "enum", label: "Status", values: ["open", "deferred", "concluded"] },
      { key: "session", type: "string", label: "Session" },
    ]
  },
  "SpeakerInscription": {
    label: "Speaker Inscription",
    fields: [
      { key: "inscription_id", type: "string", label: "Inscription ID" },
      { key: "list_type", type: "enum", label: "List Type", values: ["general_debate", "right_of_reply", "explanation_of_vote", "point_of_order"] },
      { key: "position", type: "number", label: "Position" },
      { key: "status", type: "enum", label: "Status", values: ["inscribed", "delivered", "withdrawn", "no_show"] },
      { key: "time_limit_minutes", type: "number", label: "Time Limit (min)" },
      { key: "actual_duration_seconds", type: "number", label: "Actual Duration (sec)" },
      { key: "requested_by", type: "string", label: "Requested By" },
      { key: "requested_at", type: "datetime", label: "Requested At" },
      { key: "withdrawn_reason", type: "enum", label: "Withdrawal Reason", values: ["delegation_request", "time_constraint", "procedural"] },
    ]
  },
  "Delegation": {
    label: "Delegation",
    fields: [
      { key: "delegation_id", type: "string", label: "Delegation ID" },
      { key: "name", type: "string", label: "Name" },
      { key: "iso_code", type: "string", label: "ISO Code" },
      { key: "type", type: "enum", label: "Type", values: ["member_state", "observer_state", "observer_entity", "specialized_agency"] },
      { key: "region", type: "string", label: "Region" },
      { key: "mission_address", type: "string", label: "Mission Address" },
    ]
  },
  "Delegate": {
    label: "Delegate",
    fields: [
      { key: "delegate_id", type: "string", label: "Delegate ID" },
      { key: "title", type: "string", label: "Title" },
      { key: "first_name", type: "string", label: "First Name" },
      { key: "last_name", type: "string", label: "Last Name" },
      { key: "role", type: "enum", label: "Role", values: ["head_of_delegation", "alternate_representative", "adviser", "expert"] },
      { key: "email", type: "string", label: "Email" },
      { key: "credential_status", type: "enum", label: "Credential Status", values: ["pending", "verified", "expired", "revoked"] },
      { key: "credential_type", type: "enum", label: "Credential Type", values: ["full_powers", "letter_of_credence", "note_verbale"] },
      { key: "verified_at", type: "datetime", label: "Verified At" },
      { key: "verified_by", type: "string", label: "Verified By" },
    ]
  },
  "Document": {
    label: "Document",
    fields: [
      { key: "document_id", type: "string", label: "Document ID" },
      { key: "symbol", type: "string", label: "Symbol" },
      { key: "title", type: "string", label: "Title" },
      { key: "language", type: "enum", label: "Language", values: ["ar", "zh", "en", "fr", "ru", "es"] },
      { key: "format", type: "enum", label: "Format", values: ["pdf", "docx", "html"] },
      { key: "size_bytes", type: "number", label: "Size (bytes)" },
      { key: "submitted_by", type: "string", label: "Submitted By" },
      { key: "submitted_at", type: "datetime", label: "Submitted At" },
      { key: "co_sponsors", type: "array", label: "Co-sponsors" },
      { key: "document_type", type: "enum", label: "Document Type", values: ["draft_resolution", "draft_decision", "amendment", "report", "note_verbale", "letter"] },
      { key: "status", type: "enum", label: "Status", values: ["draft", "submitted", "published", "revised", "withdrawn"] },
    ]
  },
  "Vote": {
    label: "Vote",
    fields: [
      { key: "vote_id", type: "string", label: "Vote ID" },
      { key: "resolution_symbol", type: "string", label: "Resolution Symbol" },
      { key: "resolution_title", type: "string", label: "Resolution Title" },
      { key: "vote_value", type: "enum", label: "Vote Value", values: ["in_favour", "against", "abstention", "non_participation"] },
      { key: "voting_method", type: "enum", label: "Voting Method", values: ["recorded", "show_of_hands", "consensus", "secret_ballot"] },
      { key: "explanation_of_vote", type: "boolean", label: "Explanation of Vote" },
      { key: "eov_timing", type: "enum", label: "EoV Timing", values: ["before", "after"] },
    ]
  },
  "Notification": {
    label: "Notification",
    fields: [
      { key: "notification_id", type: "string", label: "Notification ID" },
      { key: "channel", type: "enum", label: "Channel", values: ["email", "sms", "in_app", "push"] },
      { key: "recipient_email", type: "string", label: "Recipient Email" },
      { key: "template", type: "string", label: "Template" },
      { key: "subject", type: "string", label: "Subject" },
      { key: "delivery_status", type: "enum", label: "Delivery Status", values: ["pending", "delivered", "bounced", "failed"] },
      { key: "sent_at", type: "datetime", label: "Sent At" },
      { key: "related_event_type", type: "string", label: "Related Event Type" },
    ]
  },
  "Action": {
    label: "Action",
    fields: [
      { key: "action_id", type: "string", label: "Action ID" },
      { key: "action_type", type: "enum", label: "Action Type", values: ["decision", "resolution", "election", "appointment"] },
      { key: "title", type: "string", label: "Title" },
      { key: "symbol", type: "string", label: "Symbol" },
      { key: "adopted_without_vote", type: "boolean", label: "Adopted Without Vote" },
      { key: "vote_result_favour", type: "number", label: "Votes in Favour" },
      { key: "vote_result_against", type: "number", label: "Votes Against" },
      { key: "vote_result_abstention", type: "number", label: "Abstentions" },
      { key: "status", type: "enum", label: "Status", values: ["proposed", "adopted", "rejected", "deferred"] },
    ]
  },
};

// Pre-configured event types with trigger definitions
const EVENT_TYPES = [
  {
    name: "speakers.inscription.created",
    description: "A delegate has inscribed on a speakers list",
    version: "1.2",
    retention: "1 month",
    color: "accent",
    trigger: {
      object: "SpeakerInscription",
      operation: "created",
      conditions: []
    },
    sourceObjects: ["SpeakerInscription", "Delegation", "AgendaItem", "Meeting"],
    selectedFields: [
      "SpeakerInscription.list_type",
      "SpeakerInscription.position",
      "SpeakerInscription.requested_by",
      "Delegation.name",
      "Delegation.iso_code",
      "AgendaItem.item_number",
      "AgendaItem.title",
      "Meeting.meeting_id",
    ],
    displayColumns: ["Delegation.name", "AgendaItem.item_number", "SpeakerInscription.position"],
    sampleRows: [
      { "Delegation.name": "Afghanistan", "AgendaItem.item_number": "71(b)", "SpeakerInscription.position": 14 },
      { "Delegation.name": "Brazil", "AgendaItem.item_number": "71(b)", "SpeakerInscription.position": 15 },
      { "Delegation.name": "France", "AgendaItem.item_number": "71(c)", "SpeakerInscription.position": 3 },
      { "Delegation.name": "Japan", "AgendaItem.item_number": "135", "SpeakerInscription.position": 1 },
    ]
  },
  {
    name: "speakers.inscription.withdrawn",
    description: "A delegate has withdrawn from a speakers list",
    version: "1.2",
    retention: "1 month",
    color: "accent",
    trigger: {
      object: "SpeakerInscription",
      operation: "updated",
      conditions: [
        { field: "status", operator: "changes_to", value: "withdrawn" }
      ]
    },
    sourceObjects: ["SpeakerInscription", "Delegation", "AgendaItem"],
    selectedFields: [
      "SpeakerInscription.status",
      "SpeakerInscription.position",
      "SpeakerInscription.withdrawn_reason",
      "Delegation.name",
      "AgendaItem.item_number",
    ],
    displayColumns: ["Delegation.name", "AgendaItem.item_number", "SpeakerInscription.withdrawn_reason"],
    sampleRows: [
      { "Delegation.name": "France", "AgendaItem.item_number": "71(b)", "SpeakerInscription.withdrawn_reason": "delegation_request" },
      { "Delegation.name": "Mexico", "AgendaItem.item_number": "135", "SpeakerInscription.withdrawn_reason": "time_constraint" },
    ]
  },
  {
    name: "document.submitted",
    description: "A document has been submitted to the platform",
    version: "2.0",
    retention: "1 year",
    color: "green",
    trigger: {
      object: "Document",
      operation: "updated",
      conditions: [
        { field: "status", operator: "changes_to", value: "submitted" }
      ]
    },
    sourceObjects: ["Document", "Delegation", "AgendaItem"],
    selectedFields: [
      "Document.symbol",
      "Document.title",
      "Document.language",
      "Document.format",
      "Document.size_bytes",
      "Document.submitted_by",
      "Document.co_sponsors",
      "Document.document_type",
      "Document.status",
      "AgendaItem.item_number",
      "AgendaItem.committee",
    ],
    displayColumns: ["Document.symbol", "Document.title", "AgendaItem.committee"],
    sampleRows: [
      { "Document.symbol": "A/80/L.42", "Document.title": "Draft resolution: Situation of human rights in Myanmar", "AgendaItem.committee": "Third Committee" },
      { "Document.symbol": "A/80/L.38", "Document.title": "International cooperation on climate action", "AgendaItem.committee": "Second Committee" },
      { "Document.symbol": "A/C.5/80/12", "Document.title": "Programme budget implications", "AgendaItem.committee": "Fifth Committee" },
    ]
  },
  {
    name: "vote.cast",
    description: "A delegate has cast a vote on a resolution",
    version: "1.1",
    retention: "1 year",
    color: "red",
    trigger: {
      object: "Vote",
      operation: "created",
      conditions: []
    },
    sourceObjects: ["Vote", "Delegation"],
    selectedFields: [
      "Vote.resolution_symbol",
      "Vote.resolution_title",
      "Vote.vote_value",
      "Vote.voting_method",
      "Vote.explanation_of_vote",
      "Vote.eov_timing",
      "Delegation.name",
    ],
    displayColumns: ["Vote.resolution_symbol", "Vote.vote_value", "Delegation.name"],
    sampleRows: [
      { "Vote.resolution_symbol": "A/80/L.38", "Vote.vote_value": "in_favour", "Delegation.name": "Brazil" },
      { "Vote.resolution_symbol": "A/80/L.42", "Vote.vote_value": "against", "Delegation.name": "China" },
      { "Vote.resolution_symbol": "A/80/L.38", "Vote.vote_value": "abstention", "Delegation.name": "India" },
    ]
  },
  {
    name: "credential.verified",
    description: "A delegate's credentials have been verified",
    version: "1.0",
    retention: "1 month",
    color: "purple",
    trigger: {
      object: "Delegate",
      operation: "updated",
      conditions: [
        { field: "credential_status", operator: "changes_to", value: "verified" }
      ]
    },
    sourceObjects: ["Delegate", "Delegation"],
    selectedFields: [
      "Delegate.first_name",
      "Delegate.last_name",
      "Delegate.role",
      "Delegate.credential_type",
      "Delegate.credential_status",
      "Delegate.verified_by",
      "Delegation.name",
    ],
    displayColumns: ["Delegate.last_name", "Delegation.name", "Delegate.credential_type"],
    sampleRows: [
      { "Delegate.last_name": "Thompson", "Delegation.name": "United Kingdom", "Delegate.credential_type": "full_powers" },
      { "Delegate.last_name": "Tanaka", "Delegation.name": "Japan", "Delegate.credential_type": "letter_of_credence" },
      { "Delegate.last_name": "Ruiz", "Delegation.name": "Mexico", "Delegate.credential_type": "full_powers" },
    ]
  },
  {
    name: "session.opened",
    description: "A meeting session has been opened",
    version: "1.0",
    retention: "1 year",
    color: "amber",
    trigger: {
      object: "Meeting",
      operation: "updated",
      conditions: [
        { field: "status", operator: "changes_to", value: "open" }
      ]
    },
    sourceObjects: ["Meeting"],
    selectedFields: [
      "Meeting.session",
      "Meeting.body",
      "Meeting.meeting_number",
      "Meeting.meeting_type",
      "Meeting.presiding_officer",
      "Meeting.scheduled_start",
      "Meeting.actual_start",
    ],
    displayColumns: ["Meeting.meeting_number", "Meeting.body", "Meeting.meeting_type"],
    sampleRows: [
      { "Meeting.meeting_number": "PLN-047", "Meeting.body": "General Assembly", "Meeting.meeting_type": "plenary" },
      { "Meeting.meeting_number": "C3-028", "Meeting.body": "Third Committee", "Meeting.meeting_type": "formal" },
    ]
  },
  {
    name: "notification.sent",
    description: "A notification has been dispatched to a recipient",
    version: "1.3",
    retention: "1 week",
    color: "muted",
    trigger: {
      object: "Notification",
      operation: "updated",
      conditions: [
        { field: "delivery_status", operator: "changes_to", value: "delivered" }
      ]
    },
    sourceObjects: ["Notification", "Delegate"],
    selectedFields: [
      "Notification.channel",
      "Notification.subject",
      "Notification.delivery_status",
      "Notification.template",
      "Notification.recipient_email",
      "Notification.related_event_type",
      "Delegate.last_name",
    ],
    displayColumns: ["Notification.channel", "Notification.subject", "Notification.delivery_status"],
    sampleRows: [
      { "Notification.channel": "email", "Notification.subject": "Speaker inscription confirmed — Agenda item 71(b)", "Notification.delivery_status": "delivered" },
      { "Notification.channel": "email", "Notification.subject": "Your credentials have been verified", "Notification.delivery_status": "delivered" },
      { "Notification.channel": "sms", "Notification.subject": "Session PLN-047 starting in 15 minutes", "Notification.delivery_status": "pending" },
    ]
  },
];

const COLOR_MAP = {
  accent: "var(--accent)",
  green: "var(--green)",
  amber: "var(--amber)",
  red: "var(--red)",
  purple: "var(--purple)",
  muted: "var(--text-muted)",
};

const PILL_MAP = {
  in_favour: "pill-green",
  against: "pill-red",
  abstention: "pill-amber",
  delivered: "pill-green",
  pending: "pill-amber",
  failed: "pill-red",
  bounced: "pill-red",
  full_powers: "pill-purple",
  letter_of_credence: "pill-blue",
  note_verbale: "pill-amber",
  plenary: "pill-blue",
  formal: "pill-purple",
  recorded: "pill-blue",
  email: "pill-blue",
  sms: "pill-amber",
  in_app: "pill-purple",
  general_debate: "pill-blue",
  right_of_reply: "pill-purple",
  delegation_request: "pill-blue",
  time_constraint: "pill-amber",
};

const OPERATORS = [
  { value: "changes_to", label: "changes to" },
  { value: "changes_from", label: "changes from" },
  { value: "equals", label: "equals" },
  { value: "not_equals", label: "does not equal" },
];

function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

// State
let state = {};
EVENT_TYPES.forEach(et => {
  state[et.name] = {
    selectedFields: clone(et.selectedFields),
    displayColumns: clone(et.displayColumns),
    trigger: clone(et.trigger),
  };
});

// Render event type list
function renderList() {
  const list = document.getElementById("et-list");
  list.innerHTML = EVENT_TYPES.map((et, idx) => {
    const s = state[et.name];
    const objectCount = et.sourceObjects.length;
    const triggerObj = DB_SCHEMA[s.trigger.object]?.label || s.trigger.object;
    const triggerSummary = s.trigger.conditions.length > 0
      ? `${triggerObj} → ${s.trigger.operation} where ${s.trigger.conditions.map(c => `${c.field} ${c.operator.replace("_", " ")} "${c.value}"`).join(" and ")}`
      : `${triggerObj} → ${s.trigger.operation}`;
    return `
      <div class="et-card" data-idx="${idx}">
        <div class="et-card-dot" style="background: ${COLOR_MAP[et.color]}"></div>
        <div class="et-card-info">
          <div class="et-card-name">${et.name}</div>
          <div class="et-card-desc">${et.description}</div>
          <div class="et-card-trigger"><strong>Trigger:</strong> ${triggerSummary}</div>
        </div>
        <div class="et-card-meta">
          <span class="et-card-badge">v${et.version}</span>
          <span class="et-card-badge">${et.retention}</span>
          <span class="et-card-columns"><strong>${objectCount}</strong> objects · <strong>${s.selectedFields.length}</strong> fields · <strong>${s.displayColumns.length}</strong> columns</span>
        </div>
      </div>`;
  }).join("");

  list.querySelectorAll(".et-card").forEach(card => {
    card.addEventListener("click", () => openEditor(parseInt(card.dataset.idx)));
  });
}

// Build trigger summary sentence
function triggerSentenceHtml(s) {
  const obj = DB_SCHEMA[s.trigger.object];
  const objLabel = obj ? obj.label : s.trigger.object;
  let html = `Fire this event when a <em>${objLabel}</em> is <em>${s.trigger.operation}</em>`;
  if (s.trigger.conditions.length > 0) {
    html += " and ";
    html += s.trigger.conditions.map(c => {
      const opLabel = OPERATORS.find(o => o.value === c.operator)?.label || c.operator;
      return `<em>${c.field}</em> ${opLabel} <span class="val">"${c.value}"</span>`;
    }).join(" and ");
  }
  html += ".";
  return html;
}

// Open editor
function openEditor(idx) {
  const et = EVENT_TYPES[idx];
  const panel = document.getElementById("et-editor");
  const overlay = document.getElementById("et-editor-overlay");
  const inner = document.getElementById("et-editor-inner");
  const s = state[et.name];

  // Trigger object fields (for condition dropdown)
  const triggerObjFields = DB_SCHEMA[s.trigger.object]?.fields || [];
  const enumFields = triggerObjFields.filter(f => f.type === "enum");

  // Build conditions HTML
  let conditionsHtml = s.trigger.conditions.map((c, ci) => {
    const fieldDef = triggerObjFields.find(f => f.key === c.field);
    return `
      <div class="trigger-condition">
        <span class="trigger-condition-label">When</span>
        <span class="trigger-condition-field">${c.field}</span>
        <span class="trigger-condition-op">${OPERATORS.find(o => o.value === c.operator)?.label || c.operator}</span>
        <span class="trigger-condition-value">${c.value}</span>
        <button class="trigger-condition-remove" data-ci="${ci}" title="Remove condition">✕</button>
      </div>`;
  }).join("");

  // Build trigger config
  let triggerHtml = `
    <div class="trigger-config">
      <div class="trigger-row">
        <span class="trigger-label">Object</span>
        <select class="trigger-select" id="trigger-object">
          ${Object.keys(DB_SCHEMA).map(k => `<option value="${k}" ${k === s.trigger.object ? "selected" : ""}>${DB_SCHEMA[k].label}</option>`).join("")}
        </select>
      </div>
      <div class="trigger-row">
        <span class="trigger-label">Operation</span>
        <div class="trigger-op-pills">
          ${["created", "updated", "deleted"].map(op => `<button class="trigger-op ${s.trigger.operation === op ? 'active' : ''}" data-op="${op}">${op}</button>`).join("")}
        </div>
      </div>
      ${conditionsHtml}
      ${enumFields.length > 0 ? `<button class="trigger-add-condition" id="add-condition">+ Add field condition</button>` : ''}
      <div class="trigger-summary">${triggerSentenceHtml(s)}</div>
    </div>`;

  // Build schema browser grouped by source object
  let schemaHtml = "";
  const allObjects = Object.keys(DB_SCHEMA);
  const orderedObjects = [...et.sourceObjects, ...allObjects.filter(o => !et.sourceObjects.includes(o))];

  orderedObjects.forEach(objKey => {
    const obj = DB_SCHEMA[objKey];
    const isSource = et.sourceObjects.includes(objKey);
    const isTriggerObj = objKey === s.trigger.object;

    schemaHtml += `
      <div class="schema-object ${isSource ? '' : 'schema-object-inactive'}">
        <div class="schema-object-header" data-obj="${objKey}">
          <span class="schema-object-arrow ${isSource ? 'open' : ''}">▸</span>
          <span class="schema-object-dot" style="background: ${isSource ? COLOR_MAP[et.color] : 'var(--text-dim)'}"></span>
          <span class="schema-object-name">${obj.label}</span>
          <span class="schema-object-count">${obj.fields.length} fields</span>
          ${isTriggerObj ? '<span class="schema-object-tag">TRIGGER</span>' : ''}
          ${isSource && !isTriggerObj ? '<span class="schema-object-tag" style="background:var(--green-dim);color:var(--green)">RELATED</span>' : ''}
        </div>
        <div class="schema-object-fields ${isSource ? 'open' : ''}" data-obj="${objKey}">
          ${obj.fields.map(f => {
            const fullKey = `${objKey}.${f.key}`;
            const isSelected = s.selectedFields.includes(fullKey);
            const isDisplay = s.displayColumns.includes(fullKey);
            return `
              <div class="schema-field ${isSelected ? 'schema-field-selected' : ''}">
                <div class="schema-field-check ${isSelected ? 'checked' : ''}" data-key="${fullKey}" data-action="select">
                  ${isSelected ? "✓" : ""}
                </div>
                <span class="schema-field-name">${f.key}</span>
                <span class="schema-field-type">${f.type}</span>
                ${isSelected ? `<button class="schema-field-col-btn ${isDisplay ? 'active' : ''}" data-key="${fullKey}" data-action="display" title="Show as column in list view">COL</button>` : ''}
              </div>`;
          }).join("")}
        </div>
      </div>`;
  });

  inner.innerHTML = `
    <div class="et-editor-header">
      <div>
        <div class="et-editor-title" style="color: ${COLOR_MAP[et.color]}">
          <span class="et-card-dot" style="background: ${COLOR_MAP[et.color]}; width:10px; height:10px; border-radius:50%; display:inline-block;"></span>
          ${et.name}
          <span class="detail-version">v${et.version}</span>
        </div>
        <div style="margin-top: 4px; color: var(--text-muted); font-size: 13px;">${et.description}</div>
      </div>
      <button class="detail-close" id="editor-close">✕</button>
    </div>

    <div class="et-section">
      <div class="et-section-title">1. Trigger — What database change fires this event?</div>
      <div class="et-section-help">Select the <strong>source object</strong> and <strong>operation</strong> to watch. Optionally add <strong>field conditions</strong> to narrow when the event fires (e.g., only when status changes to a specific value).</div>
      ${triggerHtml}
    </div>

    <div class="et-section">
      <div class="et-section-title">2. Payload — What data to capture?</div>
      <div class="et-section-help">Browse all objects in the data model. Check fields to include in the event payload. Fields from the trigger object and related objects are available. Click <strong>COL</strong> to surface a field as a column in the list view.</div>
      <div class="schema-browser" id="schema-browser">
        ${schemaHtml}
      </div>
    </div>

    <div class="et-section">
      <div class="et-section-title">Selected Payload Fields (${s.selectedFields.length})</div>
      <div class="selected-fields-list" id="selected-fields-list">
        ${renderSelectedFields(s)}
      </div>
    </div>

    <div class="et-section">
      <div class="et-section-title">3. Display — Columns in list view</div>
      <div class="column-preview">
        <div class="column-preview-header">
          <span class="column-preview-label">Columns shown in event log when filtered to this type</span>
          <button class="preview-btn" id="preview-btn">Preview list view →</button>
        </div>
        <div class="column-chips" id="column-chips">
          ${renderChips(s.displayColumns)}
        </div>
      </div>
    </div>
  `;

  panel.classList.add("open");
  overlay.classList.add("open");

  // --- Event handlers ---

  // Operation pills
  inner.querySelectorAll(".trigger-op").forEach(btn => {
    btn.addEventListener("click", () => {
      s.trigger.operation = btn.dataset.op;
      openEditor(idx);
    });
  });

  // Object select
  document.getElementById("trigger-object")?.addEventListener("change", (e) => {
    s.trigger.object = e.target.value;
    s.trigger.conditions = [];
    openEditor(idx);
  });

  // Add condition
  document.getElementById("add-condition")?.addEventListener("click", () => {
    if (enumFields.length > 0) {
      const f = enumFields[0];
      s.trigger.conditions.push({
        field: f.key,
        operator: "changes_to",
        value: f.values?.[0] || ""
      });
      openEditor(idx);
    }
  });

  // Remove condition
  inner.querySelectorAll(".trigger-condition-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      s.trigger.conditions.splice(parseInt(btn.dataset.ci), 1);
      openEditor(idx);
    });
  });

  // Object header collapse/expand
  inner.querySelectorAll(".schema-object-header").forEach(hdr => {
    hdr.addEventListener("click", () => {
      const objKey = hdr.dataset.obj;
      const fields = inner.querySelector(`.schema-object-fields[data-obj="${objKey}"]`);
      const arrow = hdr.querySelector(".schema-object-arrow");
      fields.classList.toggle("open");
      arrow.classList.toggle("open");
    });
  });

  // Field select/deselect
  inner.querySelectorAll('[data-action="select"]').forEach(el => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const key = el.dataset.key;
      const fi = s.selectedFields.indexOf(key);
      if (fi >= 0) {
        s.selectedFields.splice(fi, 1);
        const di = s.displayColumns.indexOf(key);
        if (di >= 0) s.displayColumns.splice(di, 1);
      } else {
        s.selectedFields.push(key);
      }
      openEditor(idx);
    });
  });

  // Display column toggle
  inner.querySelectorAll('[data-action="display"]').forEach(el => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const key = el.dataset.key;
      const di = s.displayColumns.indexOf(key);
      if (di >= 0) {
        s.displayColumns.splice(di, 1);
      } else {
        s.displayColumns.push(key);
      }
      openEditor(idx);
    });
  });

  document.getElementById("editor-close").addEventListener("click", closeEditor);
  document.getElementById("preview-btn").addEventListener("click", () => openPreview(idx));
}

function renderSelectedFields(s) {
  if (s.selectedFields.length === 0) {
    return '<div class="column-empty">No fields selected. Browse objects above to add fields.</div>';
  }

  const grouped = {};
  s.selectedFields.forEach(f => {
    const [obj, field] = f.split(".");
    if (!grouped[obj]) grouped[obj] = [];
    grouped[obj].push(field);
  });

  return Object.entries(grouped).map(([obj, fields]) => {
    const schema = DB_SCHEMA[obj];
    return `
      <div class="selected-group">
        <div class="selected-group-label">${schema.label}</div>
        <div class="selected-group-fields">
          ${fields.map(f => {
            const fieldDef = schema.fields.find(x => x.key === f);
            const isDisplay = s.displayColumns.includes(`${obj}.${f}`);
            return `<span class="selected-chip ${isDisplay ? 'selected-chip-display' : ''}">${f}<span class="selected-chip-type">${fieldDef?.type || ''}</span></span>`;
          }).join("")}
        </div>
      </div>`;
  }).join("");
}

function renderChips(cols) {
  if (cols.length === 0) return '<div class="column-empty">No display columns. Click COL on selected fields to add.</div>';
  return cols.map((c, i) => {
    const [obj, field] = c.split(".");
    return `
      <span class="column-chip">
        <span class="column-chip-order">${i + 1}</span>
        <span class="column-chip-obj">${DB_SCHEMA[obj]?.label || obj}</span>
        <span class="column-chip-sep">→</span>
        ${field}
      </span>`;
  }).join("");
}

function closeEditor() {
  document.getElementById("et-editor").classList.remove("open");
  document.getElementById("et-editor-overlay").classList.remove("open");
  renderList();
}

// Preview modal
function openPreview(idx) {
  const et = EVENT_TYPES[idx];
  const s = state[et.name];
  const cols = s.displayColumns;
  const modal = document.getElementById("preview-modal");
  const overlay = document.getElementById("preview-overlay");
  const content = document.getElementById("preview-content");

  let headerHtml = `<th class="mono" style="width:140px">Timestamp</th>`;
  cols.forEach(c => {
    const [obj, field] = c.split(".");
    headerHtml += `<th><span class="col-header-obj">${DB_SCHEMA[obj]?.label || obj}</span>${field}</th>`;
  });
  headerHtml += `<th style="width:160px">Actor</th>`;

  const times = ["18:42:07.331", "18:39:55.102", "18:35:12.887", "18:30:44.219"];
  const actors = ["H.E. Mr. Ahmad Zahir", "Ms. Silva", "Mr. Dupont", "Ms. Tanaka"];

  let rowsHtml = "";
  (et.sampleRows || []).forEach((row, i) => {
    rowsHtml += `<tr><td class="mono muted">${times[i % times.length]}</td>`;
    cols.forEach(c => {
      const val = row[c];
      if (val === undefined) {
        rowsHtml += `<td class="muted">—</td>`;
      } else if (typeof val === "number") {
        rowsHtml += `<td class="mono">${val}</td>`;
      } else if (PILL_MAP[val]) {
        rowsHtml += `<td><span class="pill ${PILL_MAP[val]}">${val}</span></td>`;
      } else {
        rowsHtml += `<td>${val}</td>`;
      }
    });
    rowsHtml += `<td class="muted">${actors[i % actors.length]}</td></tr>`;
  });

  content.innerHTML = `
    <div style="padding: 16px 24px 8px; display:flex; align-items:center; gap:10px;">
      <span style="background: ${COLOR_MAP[et.color]}; width:8px; height:8px; border-radius:50%; display:inline-block;"></span>
      <span style="font-family: 'SF Mono', 'Fira Code', monospace; font-size: 14px; font-weight: 600; color: ${COLOR_MAP[et.color]}">${et.name}</span>
      <span style="color: var(--text-dim); font-size: 13px;">— filtered view with ${cols.length} payload columns from ${et.sourceObjects.length} objects</span>
    </div>
    <table class="preview-table">
      <thead><tr>${headerHtml}</tr></thead>
      <tbody>${rowsHtml}</tbody>
    </table>
  `;

  modal.classList.add("open");
  overlay.classList.add("open");
}

function closePreview() {
  document.getElementById("preview-modal").classList.remove("open");
  document.getElementById("preview-overlay").classList.remove("open");
}

document.getElementById("preview-close").addEventListener("click", closePreview);
document.getElementById("preview-overlay").addEventListener("click", closePreview);
document.getElementById("et-editor-overlay").addEventListener("click", closeEditor);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closePreview();
    closeEditor();
  }
});

renderList();
