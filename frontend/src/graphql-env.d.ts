/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
    'Boolean': unknown;
    'Float': unknown;
    'Int': unknown;
    'String': unknown;
    'String_comparison_exp': { kind: 'INPUT_OBJECT'; name: 'String_comparison_exp'; isOneOf: false; inputFields: [{ name: '_eq'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_gt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_gte'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_ilike'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_in'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; defaultValue: null }, { name: '_iregex'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_is_null'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; defaultValue: null }, { name: '_like'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_lt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_lte'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_neq'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_nilike'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_nin'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; defaultValue: null }, { name: '_niregex'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_nlike'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_nregex'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_nsimilar'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_regex'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_similar'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }]; };
    'cursor_ordering': { name: 'cursor_ordering'; enumValues: 'ASC' | 'DESC'; };
    'jsonb': unknown;
    'jsonb_cast_exp': { kind: 'INPUT_OBJECT'; name: 'jsonb_cast_exp'; isOneOf: false; inputFields: [{ name: 'String'; type: { kind: 'INPUT_OBJECT'; name: 'String_comparison_exp'; ofType: null; }; defaultValue: null }]; };
    'jsonb_comparison_exp': { kind: 'INPUT_OBJECT'; name: 'jsonb_comparison_exp'; isOneOf: false; inputFields: [{ name: '_cast'; type: { kind: 'INPUT_OBJECT'; name: 'jsonb_cast_exp'; ofType: null; }; defaultValue: null }, { name: '_contained_in'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }, { name: '_contains'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }, { name: '_eq'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }, { name: '_gt'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }, { name: '_gte'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }, { name: '_has_key'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: '_has_keys_all'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; defaultValue: null }, { name: '_has_keys_any'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; defaultValue: null }, { name: '_in'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; }; }; defaultValue: null }, { name: '_is_null'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; defaultValue: null }, { name: '_lt'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }, { name: '_lte'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }, { name: '_neq'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }, { name: '_nin'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; }; }; defaultValue: null }]; };
    'logs': { kind: 'OBJECT'; name: 'logs'; fields: { 'address': { name: 'address'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'block_number': { name: 'block_number'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; } }; 'block_timestamp': { name: 'block_timestamp'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; } }; 'decoded': { name: 'decoded'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; } }; 'from': { name: 'from'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'to': { name: 'to'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'transaction_hash': { name: 'transaction_hash'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'logs_aggregate': { kind: 'OBJECT'; name: 'logs_aggregate'; fields: { 'aggregate': { name: 'aggregate'; type: { kind: 'OBJECT'; name: 'logs_aggregate_fields'; ofType: null; } }; 'nodes': { name: 'nodes'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'logs'; ofType: null; }; }; }; } }; }; };
    'logs_aggregate_fields': { kind: 'OBJECT'; name: 'logs_aggregate_fields'; fields: { 'avg': { name: 'avg'; type: { kind: 'OBJECT'; name: 'logs_avg_fields'; ofType: null; } }; 'count': { name: 'count'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'max': { name: 'max'; type: { kind: 'OBJECT'; name: 'logs_max_fields'; ofType: null; } }; 'min': { name: 'min'; type: { kind: 'OBJECT'; name: 'logs_min_fields'; ofType: null; } }; 'stddev': { name: 'stddev'; type: { kind: 'OBJECT'; name: 'logs_stddev_fields'; ofType: null; } }; 'stddev_pop': { name: 'stddev_pop'; type: { kind: 'OBJECT'; name: 'logs_stddev_pop_fields'; ofType: null; } }; 'stddev_samp': { name: 'stddev_samp'; type: { kind: 'OBJECT'; name: 'logs_stddev_samp_fields'; ofType: null; } }; 'sum': { name: 'sum'; type: { kind: 'OBJECT'; name: 'logs_sum_fields'; ofType: null; } }; 'var_pop': { name: 'var_pop'; type: { kind: 'OBJECT'; name: 'logs_var_pop_fields'; ofType: null; } }; 'var_samp': { name: 'var_samp'; type: { kind: 'OBJECT'; name: 'logs_var_samp_fields'; ofType: null; } }; 'variance': { name: 'variance'; type: { kind: 'OBJECT'; name: 'logs_variance_fields'; ofType: null; } }; }; };
    'logs_append_input': { kind: 'INPUT_OBJECT'; name: 'logs_append_input'; isOneOf: false; inputFields: [{ name: 'decoded'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }]; };
    'logs_avg_fields': { kind: 'OBJECT'; name: 'logs_avg_fields'; fields: { 'block_number': { name: 'block_number'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null; } }; }; };
    'logs_bool_exp': { kind: 'INPUT_OBJECT'; name: 'logs_bool_exp'; isOneOf: false; inputFields: [{ name: '_and'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'logs_bool_exp'; ofType: null; }; }; }; defaultValue: null }, { name: '_not'; type: { kind: 'INPUT_OBJECT'; name: 'logs_bool_exp'; ofType: null; }; defaultValue: null }, { name: '_or'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'logs_bool_exp'; ofType: null; }; }; }; defaultValue: null }, { name: 'address'; type: { kind: 'INPUT_OBJECT'; name: 'String_comparison_exp'; ofType: null; }; defaultValue: null }, { name: 'block_number'; type: { kind: 'INPUT_OBJECT'; name: 'numeric_comparison_exp'; ofType: null; }; defaultValue: null }, { name: 'block_timestamp'; type: { kind: 'INPUT_OBJECT'; name: 'timestamptz_comparison_exp'; ofType: null; }; defaultValue: null }, { name: 'decoded'; type: { kind: 'INPUT_OBJECT'; name: 'jsonb_comparison_exp'; ofType: null; }; defaultValue: null }, { name: 'from'; type: { kind: 'INPUT_OBJECT'; name: 'String_comparison_exp'; ofType: null; }; defaultValue: null }, { name: 'to'; type: { kind: 'INPUT_OBJECT'; name: 'String_comparison_exp'; ofType: null; }; defaultValue: null }, { name: 'transaction_hash'; type: { kind: 'INPUT_OBJECT'; name: 'String_comparison_exp'; ofType: null; }; defaultValue: null }]; };
    'logs_constraint': { name: 'logs_constraint'; enumValues: 'logs_pkey'; };
    'logs_delete_at_path_input': { kind: 'INPUT_OBJECT'; name: 'logs_delete_at_path_input'; isOneOf: false; inputFields: [{ name: 'decoded'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; defaultValue: null }]; };
    'logs_delete_elem_input': { kind: 'INPUT_OBJECT'; name: 'logs_delete_elem_input'; isOneOf: false; inputFields: [{ name: 'decoded'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; defaultValue: null }]; };
    'logs_delete_key_input': { kind: 'INPUT_OBJECT'; name: 'logs_delete_key_input'; isOneOf: false; inputFields: [{ name: 'decoded'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }]; };
    'logs_inc_input': { kind: 'INPUT_OBJECT'; name: 'logs_inc_input'; isOneOf: false; inputFields: [{ name: 'block_number'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; defaultValue: null }]; };
    'logs_insert_input': { kind: 'INPUT_OBJECT'; name: 'logs_insert_input'; isOneOf: false; inputFields: [{ name: 'address'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'block_number'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; defaultValue: null }, { name: 'block_timestamp'; type: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; defaultValue: null }, { name: 'decoded'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }, { name: 'from'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'to'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'transaction_hash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }]; };
    'logs_max_fields': { kind: 'OBJECT'; name: 'logs_max_fields'; fields: { 'address': { name: 'address'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'block_number': { name: 'block_number'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; } }; 'block_timestamp': { name: 'block_timestamp'; type: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; } }; 'from': { name: 'from'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'to': { name: 'to'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'transaction_hash': { name: 'transaction_hash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'logs_min_fields': { kind: 'OBJECT'; name: 'logs_min_fields'; fields: { 'address': { name: 'address'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'block_number': { name: 'block_number'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; } }; 'block_timestamp': { name: 'block_timestamp'; type: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; } }; 'from': { name: 'from'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'to': { name: 'to'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'transaction_hash': { name: 'transaction_hash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'logs_mutation_response': { kind: 'OBJECT'; name: 'logs_mutation_response'; fields: { 'affected_rows': { name: 'affected_rows'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'returning': { name: 'returning'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'logs'; ofType: null; }; }; }; } }; }; };
    'logs_on_conflict': { kind: 'INPUT_OBJECT'; name: 'logs_on_conflict'; isOneOf: false; inputFields: [{ name: 'constraint'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'logs_constraint'; ofType: null; }; }; defaultValue: null }, { name: 'update_columns'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'logs_update_column'; ofType: null; }; }; }; }; defaultValue: "[]" }, { name: 'where'; type: { kind: 'INPUT_OBJECT'; name: 'logs_bool_exp'; ofType: null; }; defaultValue: null }]; };
    'logs_order_by': { kind: 'INPUT_OBJECT'; name: 'logs_order_by'; isOneOf: false; inputFields: [{ name: 'address'; type: { kind: 'ENUM'; name: 'order_by'; ofType: null; }; defaultValue: null }, { name: 'block_number'; type: { kind: 'ENUM'; name: 'order_by'; ofType: null; }; defaultValue: null }, { name: 'block_timestamp'; type: { kind: 'ENUM'; name: 'order_by'; ofType: null; }; defaultValue: null }, { name: 'decoded'; type: { kind: 'ENUM'; name: 'order_by'; ofType: null; }; defaultValue: null }, { name: 'from'; type: { kind: 'ENUM'; name: 'order_by'; ofType: null; }; defaultValue: null }, { name: 'to'; type: { kind: 'ENUM'; name: 'order_by'; ofType: null; }; defaultValue: null }, { name: 'transaction_hash'; type: { kind: 'ENUM'; name: 'order_by'; ofType: null; }; defaultValue: null }]; };
    'logs_pk_columns_input': { kind: 'INPUT_OBJECT'; name: 'logs_pk_columns_input'; isOneOf: false; inputFields: [{ name: 'transaction_hash'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'logs_prepend_input': { kind: 'INPUT_OBJECT'; name: 'logs_prepend_input'; isOneOf: false; inputFields: [{ name: 'decoded'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }]; };
    'logs_select_column': { name: 'logs_select_column'; enumValues: 'address' | 'block_number' | 'block_timestamp' | 'decoded' | 'from' | 'to' | 'transaction_hash'; };
    'logs_set_input': { kind: 'INPUT_OBJECT'; name: 'logs_set_input'; isOneOf: false; inputFields: [{ name: 'address'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'block_number'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; defaultValue: null }, { name: 'block_timestamp'; type: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; defaultValue: null }, { name: 'decoded'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }, { name: 'from'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'to'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'transaction_hash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }]; };
    'logs_stddev_fields': { kind: 'OBJECT'; name: 'logs_stddev_fields'; fields: { 'block_number': { name: 'block_number'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null; } }; }; };
    'logs_stddev_pop_fields': { kind: 'OBJECT'; name: 'logs_stddev_pop_fields'; fields: { 'block_number': { name: 'block_number'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null; } }; }; };
    'logs_stddev_samp_fields': { kind: 'OBJECT'; name: 'logs_stddev_samp_fields'; fields: { 'block_number': { name: 'block_number'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null; } }; }; };
    'logs_stream_cursor_input': { kind: 'INPUT_OBJECT'; name: 'logs_stream_cursor_input'; isOneOf: false; inputFields: [{ name: 'initial_value'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'logs_stream_cursor_value_input'; ofType: null; }; }; defaultValue: null }, { name: 'ordering'; type: { kind: 'ENUM'; name: 'cursor_ordering'; ofType: null; }; defaultValue: null }]; };
    'logs_stream_cursor_value_input': { kind: 'INPUT_OBJECT'; name: 'logs_stream_cursor_value_input'; isOneOf: false; inputFields: [{ name: 'address'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'block_number'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; defaultValue: null }, { name: 'block_timestamp'; type: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; defaultValue: null }, { name: 'decoded'; type: { kind: 'SCALAR'; name: 'jsonb'; ofType: null; }; defaultValue: null }, { name: 'from'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'to'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'transaction_hash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }]; };
    'logs_sum_fields': { kind: 'OBJECT'; name: 'logs_sum_fields'; fields: { 'block_number': { name: 'block_number'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; } }; }; };
    'logs_update_column': { name: 'logs_update_column'; enumValues: 'address' | 'block_number' | 'block_timestamp' | 'decoded' | 'from' | 'to' | 'transaction_hash'; };
    'logs_updates': { kind: 'INPUT_OBJECT'; name: 'logs_updates'; isOneOf: false; inputFields: [{ name: '_append'; type: { kind: 'INPUT_OBJECT'; name: 'logs_append_input'; ofType: null; }; defaultValue: null }, { name: '_delete_at_path'; type: { kind: 'INPUT_OBJECT'; name: 'logs_delete_at_path_input'; ofType: null; }; defaultValue: null }, { name: '_delete_elem'; type: { kind: 'INPUT_OBJECT'; name: 'logs_delete_elem_input'; ofType: null; }; defaultValue: null }, { name: '_delete_key'; type: { kind: 'INPUT_OBJECT'; name: 'logs_delete_key_input'; ofType: null; }; defaultValue: null }, { name: '_inc'; type: { kind: 'INPUT_OBJECT'; name: 'logs_inc_input'; ofType: null; }; defaultValue: null }, { name: '_prepend'; type: { kind: 'INPUT_OBJECT'; name: 'logs_prepend_input'; ofType: null; }; defaultValue: null }, { name: '_set'; type: { kind: 'INPUT_OBJECT'; name: 'logs_set_input'; ofType: null; }; defaultValue: null }, { name: 'where'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'logs_bool_exp'; ofType: null; }; }; defaultValue: null }]; };
    'logs_var_pop_fields': { kind: 'OBJECT'; name: 'logs_var_pop_fields'; fields: { 'block_number': { name: 'block_number'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null; } }; }; };
    'logs_var_samp_fields': { kind: 'OBJECT'; name: 'logs_var_samp_fields'; fields: { 'block_number': { name: 'block_number'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null; } }; }; };
    'logs_variance_fields': { kind: 'OBJECT'; name: 'logs_variance_fields'; fields: { 'block_number': { name: 'block_number'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null; } }; }; };
    'mutation_root': { kind: 'OBJECT'; name: 'mutation_root'; fields: { 'delete_logs': { name: 'delete_logs'; type: { kind: 'OBJECT'; name: 'logs_mutation_response'; ofType: null; } }; 'delete_logs_by_pk': { name: 'delete_logs_by_pk'; type: { kind: 'OBJECT'; name: 'logs'; ofType: null; } }; 'insert_logs': { name: 'insert_logs'; type: { kind: 'OBJECT'; name: 'logs_mutation_response'; ofType: null; } }; 'insert_logs_one': { name: 'insert_logs_one'; type: { kind: 'OBJECT'; name: 'logs'; ofType: null; } }; 'update_logs': { name: 'update_logs'; type: { kind: 'OBJECT'; name: 'logs_mutation_response'; ofType: null; } }; 'update_logs_by_pk': { name: 'update_logs_by_pk'; type: { kind: 'OBJECT'; name: 'logs'; ofType: null; } }; 'update_logs_many': { name: 'update_logs_many'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'logs_mutation_response'; ofType: null; }; } }; }; };
    'numeric': unknown;
    'numeric_comparison_exp': { kind: 'INPUT_OBJECT'; name: 'numeric_comparison_exp'; isOneOf: false; inputFields: [{ name: '_eq'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; defaultValue: null }, { name: '_gt'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; defaultValue: null }, { name: '_gte'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; defaultValue: null }, { name: '_in'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; }; }; defaultValue: null }, { name: '_is_null'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; defaultValue: null }, { name: '_lt'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; defaultValue: null }, { name: '_lte'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; defaultValue: null }, { name: '_neq'; type: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; defaultValue: null }, { name: '_nin'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'numeric'; ofType: null; }; }; }; defaultValue: null }]; };
    'order_by': { name: 'order_by'; enumValues: 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'; };
    'query_root': { kind: 'OBJECT'; name: 'query_root'; fields: { 'logs': { name: 'logs'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'logs'; ofType: null; }; }; }; } }; 'logs_aggregate': { name: 'logs_aggregate'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'logs_aggregate'; ofType: null; }; } }; 'logs_by_pk': { name: 'logs_by_pk'; type: { kind: 'OBJECT'; name: 'logs'; ofType: null; } }; }; };
    'subscription_root': { kind: 'OBJECT'; name: 'subscription_root'; fields: { 'logs': { name: 'logs'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'logs'; ofType: null; }; }; }; } }; 'logs_aggregate': { name: 'logs_aggregate'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'logs_aggregate'; ofType: null; }; } }; 'logs_by_pk': { name: 'logs_by_pk'; type: { kind: 'OBJECT'; name: 'logs'; ofType: null; } }; 'logs_stream': { name: 'logs_stream'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'logs'; ofType: null; }; }; }; } }; }; };
    'timestamptz': unknown;
    'timestamptz_comparison_exp': { kind: 'INPUT_OBJECT'; name: 'timestamptz_comparison_exp'; isOneOf: false; inputFields: [{ name: '_eq'; type: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; defaultValue: null }, { name: '_gt'; type: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; defaultValue: null }, { name: '_gte'; type: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; defaultValue: null }, { name: '_in'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; }; }; defaultValue: null }, { name: '_is_null'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; defaultValue: null }, { name: '_lt'; type: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; defaultValue: null }, { name: '_lte'; type: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; defaultValue: null }, { name: '_neq'; type: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; defaultValue: null }, { name: '_nin'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'timestamptz'; ofType: null; }; }; }; defaultValue: null }]; };
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'query_root';
  mutation: 'mutation_root';
  subscription: 'subscription_root';
  types: introspection_types;
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}