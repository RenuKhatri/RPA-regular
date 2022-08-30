$( document ).ready(function() {
    $('.sub-menu ul').hide();
    $(".sub-menu a").click(function () {
        $(this).parent(".sub-menu").children("ul").slideToggle("100");
        $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
    });
    $('.sub-menu').has('ul').find('a').not('ul ul a').addClass('caret');
});


window.addEventListener("load", () => {
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");
	const excelMenu = document.querySelector("#excel_menu");
	const csvMenu = document.querySelector("#csv_menu");
	const dwa_menu = document.querySelector("#dwa_menu");
	const email_menu = document.querySelector("#email_menu");
	const phone = document.querySelector("#phone");
	const web_automation = document.querySelector("#web_automation");
	const files_menu = document.querySelector("#files_menu");
	const folder_menu = document.querySelector("#folder_menu");
	const ftp_menu = document.querySelector("#ftp_menu");
	const pdf_menu = document.querySelector("#pdf_menu");
	const wde_menu = document.querySelector("#wde_menu");
	const error_handle_menu = document.querySelector("#error_handle_menu");
	const ocr = document.querySelector("#ocr");

	const clr_nodes = document.querySelector("#clear");
	const undo_node = document.querySelector("#undo");
	const redo_node = document.querySelector("#redo");
	const button_save_task = document.querySelector("#button_save_task");
	const create_task_button = document.querySelector("#button_create_task");
	const run_task_button = document.querySelector("#run_task_btn");
	// const click_task = document.querySelector(".tasks li");
	const click_task = document.querySelectorAll('.click_task');

	// SMS
	const pop_sms_recipient = document.querySelector("#pop_sms_recipient");
	const pop_sms_message = document.querySelector("#pop_sms_message");
	const btn_sms_ok = document.querySelector("#btn_sms_ok");

	// Call
	const pop_call_recipient = document.querySelector("#pop_call_recipient");
	const pop_call_message = document.querySelector("#pop_call_message");
	const btn_call_ok = document.querySelector("#btn_call_ok");

	// read from CSV
	const pop_read_CSV_username = document.querySelector("#pop_read_CSV_username");
	const pop_read_CSV_message = document.querySelector("#pop_read_CSV_message");
	const btn_read_CSV_ok = document.querySelector("#btn_read_CSV_ok");

	// write to CSV
	const pop_write_CSV_username = document.querySelector("#pop_write_CSV_username");
	const pop_write_CSV_message = document.querySelector("#pop_write_CSV_message");
	const btn_write_CSV_ok = document.querySelector("#btn_write_CSV_ok");

	// download small files from web
	const pop_download_small_files_username = document.querySelector("#pop_download_small_files_username");
	const pop_download_small_files_message = document.querySelector("#pop_download_small_files_message");
	const btn_download_small_files_ok = document.querySelector("#btn_download_small_files_ok");

	// download large files from web
	const pop_download_large_files_username = document.querySelector("#pop_download_large_files_username");
	const pop_download_large_files_message = document.querySelector("#pop_download_large_files_message");
	const btn_download_large_files_ok = document.querySelector("#btn_download_large_files_ok");

	// Send_Email
	const pop_send_email_sender_address = document.querySelector("#pop_send_email_sender_address");
	const pop_send_email_subject = document.querySelector("#pop_send_email_subject");
	const pop_send_email_mail_body = document.querySelector("#pop_send_email_mail_body");
	const btn_pop_send_email_ok = document.querySelector("#btn_pop_send_email_ok");

	// Retrieve_Email
	const pop_retrieve_email_sender_address = document.querySelector("#pop_retrieve_email_sender_address");
	const pop_retrieve_email_subject = document.querySelector("#pop_retrieve_email_subject");
	const pop_retrieve_email_mail_body = document.querySelector("#pop_retrieve_email_mail_body");
	const btn_pop_retrieve_email_ok = document.querySelector("#btn_pop_retrieve_email_ok");

	// Send_HTML_Message
	const pop_send_HTML_message_sender_address = document.querySelector("#pop_send_HTML_message_sender_address");
	const pop_send_HTML_message_subject = document.querySelector("#pop_send_HTML_message_subject");
	const pop_send_HTML_message_mail_body = document.querySelector("#pop_send_HTML_message_mail_body");
	const btn_pop_send_HTML_message_ok = document.querySelector("#btn_pop_send_HTML_message_ok");

	// Send_Plaintext_Message
	const pop_send_plaintext_message_sender_address = document.querySelector("#pop_send_plaintext_message_sender_address");
	const pop_send_plaintext_message_subject = document.querySelector("#pop_send_plaintext_message_subject");
	const pop_send_plaintext_message_mail_body = document.querySelector("#pop_send_plaintext_message_mail_body");
	const btn_pop_send_plaintext_message_ok = document.querySelector("#btn_pop_send_plaintext_message_ok");

	// Attach Excel
	const pop_attach_excel_sender_address = document.querySelector("#pop_attach_excel_sender_address");
	const pop_attach_excel_subject = document.querySelector("#pop_attach_excel_subject");
	const pop_attach_excel_mail_body = document.querySelector("#pop_attach_excel_mail_body");
	const btn_pop_attach_excel_ok = document.querySelector("#btn_pop_attach_excel_ok");

	// Attach Word
	const pop_attach_word_sender_address = document.querySelector("#pop_attach_word_sender_address");
	const pop_attach_word_subject = document.querySelector("#pop_attach_word_subject");
	const pop_attach_word_mail_body = document.querySelector("#pop_attach_word_mail_body");
	const btn_pop_attach_word_ok = document.querySelector("#btn_pop_attach_word_ok");

	// Attach PPT
	const pop_attach_ppt_sender_address = document.querySelector("#pop_attach_ppt_sender_address");
	const pop_attach_ppt_subject = document.querySelector("#pop_attach_ppt_subject");
	const pop_attach_ppt_mail_body = document.querySelector("#pop_attach_ppt_mail_body");
	const btn_pop_attach_ppt_ok = document.querySelector("#btn_pop_attach_ppt_ok");

	// Attach Zip
	const pop_attach_zip_sender_address = document.querySelector("#pop_attach_zip_sender_address");
	const pop_attach_zip_subject = document.querySelector("#pop_attach_zip_subject");
	const pop_attach_zip_mail_body = document.querySelector("#pop_attach_zip_mail_body");
	const btn_pop_attach_zip_ok = document.querySelector("#btn_pop_attach_zip_ok");

	// Attach Any Other Format
	const pop_attach_any_otherformat_sender_address = document.querySelector("#pop_attach_any_otherformat_sender_address");
	const pop_attach_any_otherformat_subject = document.querySelector("#pop_attach_any_otherformat_subject");
	const pop_attach_any_otherformat_mail_body = document.querySelector("#pop_attach_any_otherformat_mail_body");
	const btn_pop_attach_any_otherformat_ok = document.querySelector("#btn_pop_attach_any_otherformat_zip_ok");

	// Save Attachment
	const pop_save_attachment_sender_address = document.querySelector("#pop_save_attachment_sender_address");
	const pop_save_attachment_subject = document.querySelector("#pop_save_attachment_subject");
	const pop_save_attachment_mail_body = document.querySelector("#pop_save_attachment_mail_body");
	const btn_pop_save_attachment_ok = document.querySelector("#btn_pop_save_attachment_ok");

	// Delete All Messages
	const pop_del_all_messages_sender_address = document.querySelector("#pop_del_all_messages_sender_address");
	const pop_del_all_messages_subject = document.querySelector("#pop_del_all_messages_subject");
	const pop_del_all_messages_mail_body = document.querySelector("#pop_del_all_messages_mail_body");
	const btn_pop_del_all_messages_ok = document.querySelector("#btn_pop_del_all_messages_ok");

	// Delete Read Messages
	const pop_del_read_messages_sender_address = document.querySelector("#pop_del_read_messages_sender_address");
	const pop_del_read_messages_subject = document.querySelector("#pop_del_read_messages_subject");
	const pop_del_read_messages_mail_body = document.querySelector("#pop_del_read_messages_mail_body");
	const btn_pop_del_read_messages_ok = document.querySelector("#btn_pop_del_read_messages_ok");

	// Delete Unread Messages
	const pop_del_unread_messages_sender_address = document.querySelector("#pop_del_unread_messages_sender_address");
	const pop_del_unread_messages_subject = document.querySelector("#pop_del_unread_messages_subject");
	const pop_del_unread_messages_mail_body = document.querySelector("#pop_del_unread_messages_mail_body");
	const btn_pop_del_unread_messages_ok = document.querySelector("#btn_pop_del_unread_messages_ok");

	// Begin Error Handling
	const pop_begin_error_handling_sender_address = document.querySelector("#pop_begin_error_handling_sender_address");
	const pop_begin_error_handling_subject = document.querySelector("#pop_begin_error_handling_subject");
	const pop_begin_error_handling_mail_body = document.querySelector("#pop_begin_error_handling_mail_body");
	const btn_pop_begin_error_handling_ok = document.querySelector("#btn_pop_begin_error_handling_ok");

	// End Error Handling
	const pop_end_error_handling_sender_address = document.querySelector("#pop_end_error_handling_sender_address");
	const pop_end_error_handling_subject = document.querySelector("#pop_end_error_handling_subject");
	const pop_end_error_handling_mail_body = document.querySelector("#pop_end_error_handling_mail_body");
	const btn_pop_end_error_handling_ok = document.querySelector("#btn_pop_end_error_handling_ok");

	// Continue Error Handling
	const pop_continue_error_handling_sender_address = document.querySelector("#pop_continue_error_handling_sender_address");
	const pop_continue_error_handling_subject = document.querySelector("#pop_continue_error_handling_subject");
	const pop_continue_error_handling_mail_body = document.querySelector("#pop_continue_error_handling_mail_body");
	const btn_pop_continue_error_handling_ok = document.querySelector("#btn_pop_continue_error_handling_ok");

	// Send Error Email
	const pop_eh_send_email_sender_address = document.querySelector("#pop_eh_send_email_sender_address");
	const pop_eh_send_email_subject = document.querySelector("#pop_eh_send_email_subject");
	const pop_eh_send_email_mail_body = document.querySelector("#pop_eh_send_email_mail_body");
	const btn_pop_eh_send_email_ok = document.querySelector("#btn_pop_eh_send_email_ok");

	// Take Snapshot
	const pop_take_snapshot_sender_address = document.querySelector("#pop_take_snapshot_sender_address");
	const pop_take_snapshot_subject = document.querySelector("#pop_take_snapshot_subject");
	const pop_take_snapshot_mail_body = document.querySelector("#pop_take_snapshot_mail_body");
	const btn_pop_take_snapshot_ok = document.querySelector("#btn_pop_take_snapshot_ok");

	// Log Data into File
	const pop_log_data_into_file_sender_address = document.querySelector("#pop_log_data_into_file_sender_address");
	const pop_log_data_into_file_subject = document.querySelector("#pop_log_data_into_file_subject");
	const pop_log_data_into_file_mail_body = document.querySelector("#pop_log_data_into_file_mail_body");
	const btn_pop_log_data_into_file_ok = document.querySelector("#btn_pop_log_data_into_file_ok");

	// Stop Task
	const pop_stop_task_sender_address = document.querySelector("#pop_stop_task_sender_address");
	const pop_stop_task_subject = document.querySelector("#pop_stop_task_subject");
	const pop_stop_task_mail_body = document.querySelector("#pop_stop_task_mail_body");
	const btn_pop_stop_task_ok = document.querySelector("#btn_pop_stop_task_ok");

	// Create_Excel
	const pop_create_excel_name = document.querySelector("#pop_create_excel_name");
	const pop_create_excel_path = document.querySelector("#pop_create_excel_path");
	const btn_pop_create_excel_ok = document.querySelector("#btn_pop_create_excel_ok");

	// Open_Excel
	const pop_open_excel_name = document.querySelector("#pop_open_excel_name");
	const pop_open_excel_path = document.querySelector("#pop_open_excel_path");
	const btn_pop_open_excel_ok = document.querySelector("#btn_pop_open_excel_ok");

	// Delete_Excel
	const pop_delete_excel_path = document.querySelector("#pop_delete_excel_path");
	const btn_pop_delete_excel_ok = document.querySelector("#btn_pop_delete_excel_ok");

	// Rename_Excel
	const pop_rename_excel_current_path = document.querySelector("#pop_rename_excel_current_path");
	const pop_rename_excel_new_path = document.querySelector("#pop_rename_excel_new_path");
	const pop_rename_excel_name = document.querySelector("#pop_rename_excel_name");
	const btn_pop_rename_excel_ok = document.querySelector("#btn_pop_rename_excel_ok");

	// Copy_Excel
	const pop_copy_excel_source_path = document.querySelector("#pop_copy_excel_source_path");
	const pop_copy_excel_destination_path = document.querySelector("#pop_copy_excel_destination_path");
	const pop_copy_excel_name = document.querySelector("#pop_copy_excel_name");
	const btn_pop_copy_excel_ok = document.querySelector("#btn_pop_copy_excel_ok");

	// Move_Excel
	const pop_move_excel_source_path = document.querySelector("#pop_move_excel_source_path");
	const pop_move_excel_destination_path = document.querySelector("#pop_move_excel_destination_path");
	const pop_move_excel_name = document.querySelector("#pop_move_excel_name");
	const btn_pop_move_excel_ok = document.querySelector("#btn_pop_move_excel_ok");

	// Search_value_in Excel
	const pop_search_value_source_path = document.querySelector("#pop_search_value_source_path");
	const pop_search_value_destination_path = document.querySelector("#pop_search_value_destination_path");
	const pop_search_value_name = document.querySelector("#pop_search_value_name");
	const btn_pop_search_value_ok = document.querySelector("#btn_pop_search_value_ok");

	// Copy_Data_from_one_Excel_to_Another
	const pop_copy_data_excel_source_path = document.querySelector("#pop_copy_data_excel_source_path");
	const pop_copy_data_excel_destination_path = document.querySelector("#pop_copy_data_excel_destination_path");
	const pop_copy_data_excel_name = document.querySelector("#pop_copy_data_excel_name");
	const btn_pop_copy_data_excel_ok = document.querySelector("#btn_pop_copy_data_excel_ok");

	// Select_Sheet
	const pop_sel_sheet_source_path = document.querySelector("#pop_sel_sheet_source_path");
	const pop_sel_sheet_destination_path = document.querySelector("#pop_sel_sheet_destination_path");
	const pop_sel_sheet_name = document.querySelector("#pop_sel_sheet_name");
	const btn_pop_sel_sheet_ok = document.querySelector("#btn_pop_sel_sheet_ok");

	// Rename_Sheet
	const pop_rename_sheet_source_path = document.querySelector("#pop_rename_sheet_source_path");
	const pop_rename_sheet_destination_path = document.querySelector("#pop_rename_sheet_destination_path");
	const pop_rename_sheet_name = document.querySelector("#pop_rename_sheet_name");
	const btn_pop_rename_sheet_ok = document.querySelector("#btn_pop_rename_sheet_ok");

	// Copy_Data_from_one_Sheet_to_Another
	const pop_copy_data_sheet_source_path = document.querySelector("#pop_copy_data_excel_source_path");
	const pop_copy_data_sheet_destination_path = document.querySelector("#pop_copy_data_sheet_destination_path");
	const pop_copy_data_sheet_name = document.querySelector("#pop_copy_data_sheet_name");
	const btn_pop_copy_data_sheet_ok = document.querySelector("#btn_pop_copy_data_sheet_ok");

	// Delete_Sheet
	const pop_del_sheet_name = document.querySelector("#pop_del_sheet_name");
	const btn_pop_del_sheet_ok = document.querySelector("#btn_pop_del_sheet_ok");

	// Delete_Column
	const pop_del_column_name = document.querySelector("#pop_del_column_name");
	const btn_pop_del_column_ok = document.querySelector("#btn_pop_del_column_ok");

	// Delete_Row
	const pop_del_row_name = document.querySelector("#pop_del_row_name");
	const btn_pop_del_row_ok = document.querySelector("#btn_pop_del_row_ok");

	// Delete_all_rows_and_columns
	const pop_del_row_column_name = document.querySelector("#pop_del_row_column_name");
	const btn_pop_del_row_column_ok = document.querySelector("#btn_pop_del_row_column_ok");

	// Vlookup_on_same_Excel
	const pop_vlookup_same_searched_value = document.querySelector("#pop_vlookup_same_searched_value");
	const pop_vlookup_same_searched_range = document.querySelector("#pop_vlookup_same_searched_range");
	const pop_vlookup_same_index_value = document.querySelector("#pop_vlookup_same_index_value");
	const btn_pop_vlookup_same_ok = document.querySelector("#btn_pop_vlookup_same_ok");

	// Vlookup_on_two_Excel
	const pop_vlookup_two_cell_range = document.querySelector("#pop_vlookup_two_cell_range");
	const pop_vlookup_two_value = document.querySelector("#pop_vlookup_two_value");
	const pop_vlookup_two_index_value = document.querySelector("#pop_vlookup_two_index_value");
	const btn_pop_vlookup_two_ok = document.querySelector("#btn_pop_vlookup_two_ok");

	// Formula
	const pop_formula_enter_value = document.querySelector("#pop_formula_enter_value");
	const pop_formula_cell_range = document.querySelector("#pop_formula_cell_range");
	const btn_pop_formula_ok = document.querySelector("#btn_pop_formula_ok");

	// Filter Excel
	const pop_filter_enter_value = document.querySelector("#pop_filter_enter_value");
	const pop_filter_column_number = document.querySelector("#pop_filter_column_number");
	const btn_pop_filter_ok = document.querySelector("#btn_pop_filter_ok");

	// Remove Duplicates
	const pop_remove_duplicates_column_number = document.querySelector("#pop_remove_duplicates_column_number");
	const btn_pop_remove_duplicates_ok = document.querySelector("#btn_pop_remove_duplicates_ok");

	// Max Column
	const pop_max_column_sheet_name = document.querySelector("#pop_max_column_sheet_name");
	const btn_pop_max_column_ok = document.querySelector("#btn_pop_max_column_ok");

	// Max Rows
	const pop_max_rows_sheet_name = document.querySelector("#pop_max_rows_sheet_name");
	const btn_pop_max_rows_ok = document.querySelector("#btn_pop_max_rows_ok");

	// Round off column
	const pop_roundoff_column_number = document.querySelector("#pop_roundoff_column_number");
	const pop_roundoff_decimal_place = document.querySelector("#pop_roundoff_decimal_place");
    const btn_pop_roundoff_decimal_ok = document.querySelector("#btn_pop_roundoff_decimal_ok");

    // Password
	const pop_password_enter_keyword = document.querySelector("#pop_password_enter_keyword");
	const pop_password_enter_password = document.querySelector("#pop_password_enter_password");
    const btn_pop_password_ok = document.querySelector("#btn_pop_password_ok");

    // Sum if
	const pop_sum_if_start_cell = document.querySelector("#pop_sum_if_start_cell");
	const pop_sum_if_end_cell = document.querySelector("#pop_sum_if_end_cell");
    const pop_sum_if_output_cell = document.querySelector("#pop_sum_if_output_cell");
    const btn_pop_sum_if_ok = document.querySelector("#btn_pop_sum_if_ok");

    // Pivot Table
	const pop_pivot_table_column_value = document.querySelector("#pop_pivot_table_column_value");
	const pop_pivot_table_column_index = document.querySelector("#pop_pivot_table_column_index");
    const pop_pivot_table_ok = document.querySelector("#pop_pivot_table_ok");

    // Paste Special
	const pop_paste_special_sheet_number = document.querySelector("#pop_paste_special_sheet_number");
    const btn_pop_paste_special_ok = document.querySelector("#btn_pop_paste_special_ok");

    // Change Header
	const pop_change_header_excel_path = document.querySelector("#pop_change_header_excel_path");
	const pop_change_header_old_name = document.querySelector("#pop_change_header_old_name");
	const pop_change_header_new_name = document.querySelector("#pop_change_header_new_name");
    const btn_pop_change_header_ok = document.querySelector("#btn_pop_change_header_ok");

    // Change Datatype of column
	const pop_col_datatype_column_name = document.querySelector("#pop_col_datatype_column_name");
	const pop_col_datatype_data_type = document.querySelector("#pop_col_datatype_data_type");
    const btn_pop_col_datatype_ok = document.querySelector("#btn_pop_col_datatype_ok");

    // Excel to CSV
	const pop_excel_to_csv_excel_path = document.querySelector("#pop_excel_to_csv_excel_path");
	const pop_excel_to_csv_CSV_path = document.querySelector("#pop_excel_to_csv_CSV_path");
	const pop_excel_to_csv_CSV_name = document.querySelector("#pop_excel_to_csv_CSV_name");
    const btn_pop_excel_to_csv_ok = document.querySelector("#btn_pop_excel_to_csv_ok");

    // Read Cell Data
	const pop_read_cell_data_range = document.querySelector("#pop_read_cell_data_range");
    const btn_pop_read_cell_data_ok = document.querySelector("#btn_pop_read_cell_data_ok");

    // Change folder on FTP server
	const pop_change_folder_ftp_server_address = document.querySelector("#pop_change_folder_ftp_server_address");
	const pop_change_folder_ftp_username = document.querySelector("#pop_change_folder_ftp_username");
	const pop_change_folder_ftp_password = document.querySelector("#pop_change_folder_ftp_password");
	const pop_change_folder_ftp_folder_path = document.querySelector("#pop_change_folder_ftp_folder_path");
    const btn_pop_change_folder_ftp_ok = document.querySelector("#btn_pop_change_folder_ftp_ok");

    // Create folder on FTP server
	const pop_create_folder_ftp_server_address = document.querySelector("#pop_create_folder_ftp_server_address");
	const pop_create_folder_ftp_username = document.querySelector("#pop_create_folder_ftp_username");
	const pop_create_folder_ftp_password = document.querySelector("#pop_create_folder_ftp_password");
	const pop_create_folder_ftp_server_path = document.querySelector("#pop_create_folder_ftp_server_path");
	const pop_create_folder_ftp_name = document.querySelector("#pop_create_folder_ftp_name");
    const btn_pop_create_folder_ftp_ok = document.querySelector("#btn_pop_create_folder_ftp_ok");

    // Delete Folder
	const pop_del_folder_enter_path = document.querySelector("#pop_del_folder_enter_path");
    const btn_pop_del_folder_ok = document.querySelector("#btn_pop_del_folder_ok");

    // Delete file on ftp server
	const pop_file_delete_ftp_server_address = document.querySelector("#pop_file_delete_ftp_server_address");
	const pop_file_delete_ftp_username = document.querySelector("#pop_file_delete_ftp_username");
	const pop_file_delete_ftp_password = document.querySelector("#pop_file_delete_ftp_password");
	const pop_file_delete_ftp_file_path = document.querySelector("#pop_file_delete_ftp_file_path");
	const pop_file_delete_ftp_file_name = document.querySelector("#pop_file_delete_ftp_file_name");
    const btn_pop_file_delete_ftp_ok = document.querySelector("#btn_pop_file_delete_ftp_ok");

    // Download file from FTP server
	const pop_file_download_ftp_server_address = document.querySelector("#pop_file_download_ftp_server_address");
	const pop_file_download_ftp_username = document.querySelector("#pop_file_download_ftp_username");
	const pop_file_download_ftp_password = document.querySelector("#pop_file_download_ftp_password");
	const pop_file_download_ftp_file_path = document.querySelector("#pop_file_download_ftp_file_path");
	const pop_file_download_ftp_local_path = document.querySelector("#pop_file_download_ftp_local_path");
    const btn_pop_file_download_ftp_ok = document.querySelector("#btn_pop_file_download_ftp_ok");

    // Rename file on FTP server
	const pop_file_rename_ftp_server_address = document.querySelector("#pop_file_rename_ftp_server_address");
	const pop_file_rename_ftp_username = document.querySelector("#pop_file_rename_ftp_username");
	const pop_file_rename_ftp_password = document.querySelector("#pop_file_rename_ftp_password");
	const pop_file_rename_ftp_file_path = document.querySelector("#pop_file_rename_ftp_file_path");
	const pop_file_rename_ftp_file_name = document.querySelector("#pop_file_rename_ftp_file_name");
	const pop_file_rename_ftp_new_file = document.querySelector("#pop_file_rename_ftp_new_file");
    const btn_pop_file_rename_ftp_ok = document.querySelector("#btn_pop_file_rename_ftp_ok");

    // Upload file on FTP server
	const pop_file_upload_ftp_server_address = document.querySelector("#pop_file_upload_ftp_server_address");
	const pop_file_upload_ftp_username = document.querySelector("#pop_file_upload_ftp_username");
	const pop_file_upload_ftp_password = document.querySelector("#pop_file_upload_ftp_password");
	const pop_file_upload_ftp_file_path = document.querySelector("#pop_file_upload_ftp_file_path");
	const pop_file_upload_ftp_server_path = document.querySelector("#pop_file_upload_ftp_server_path");
    const btn_pop_file_upload_ftp_ok = document.querySelector("#btn_pop_file_upload_ftp_ok");

    // Delete folder on FTP server
	const pop_folder_delete_ftp_server_address = document.querySelector("#pop_folder_delete_ftp_server_address");
	const pop_folder_delete_ftp_username = document.querySelector("#pop_folder_delete_ftp_username");
	const pop_folder_delete_ftp_password = document.querySelector("#pop_folder_delete_ftp_password");
	const pop_folder_delete_ftp_folder_path = document.querySelector("#pop_folder_delete_ftp_folder_path");
	const pop_folder_delete_ftp_folder_name = document.querySelector("#pop_folder_delete_ftp_folder_name");
    const btn_pop_folder_delete_ftp_ok = document.querySelector("#btn_pop_folder_delete_ftp_ok");

    // Upload folder on FTP server
	const pop_folder_upload_ftp_server_address = document.querySelector("#pop_folder_upload_ftp_server_address");
	const pop_folder_upload_ftp_username = document.querySelector("#pop_folder_upload_ftp_username");
	const pop_folder_upload_ftp_password = document.querySelector("#pop_folder_upload_ftp_password");
	const pop_folder_upload_ftp_path = document.querySelector("#pop_folder_upload_ftp_path");
	const pop_folder_upload_ftp_server_path = document.querySelector("#pop_folder_upload_ftp_server_path");
    const btn_pop_folder_upload_ftp_ok = document.querySelector("#btn_pop_folder_upload_ftp_ok");

    // FTP connect
	const pop_ftp_connect_server_address = document.querySelector("#pop_ftp_connect_server_address");
	const pop_ftp_connect_server_username = document.querySelector("#pop_ftp_connect_server_username");
	const pop_ftp_connect_server_password = document.querySelector("#pop_ftp_connect_server_password");
    const btn_pop_ftp_connect_ok = document.querySelector("#btn_pop_ftp_connect_ok");

    // FTP disconnect
	const pop_ftp_disconnect_server_address = document.querySelector("#pop_ftp_disconnect_server_address");
	const pop_ftp_disconnect_username = document.querySelector("#pop_ftp_disconnect_username");
	const pop_ftp_disconnect_password = document.querySelector("#pop_ftp_disconnect_password");
    const btn_pop_ftp_disconnect_ok = document.querySelector("#btn_pop_ftp_disconnect_ok");

    // Secure FTP connection
	const pop_secure_ftp_connection_server_address = document.querySelector("#pop_secure_ftp_connection_server_address");
	const pop_secure_ftp_connection_username = document.querySelector("#pop_secure_ftp_connection_username");
	const pop_secure_ftp_connection_password = document.querySelector("#pop_secure_ftp_connection_password");
    const btn_pop_secure_ftp_connection_ok = document.querySelector("#btn_pop_secure_ftp_connection_ok");

    // FTP server connection
	const btn_pop_ftp_server_connection_server_address = document.querySelector("#btn_pop_ftp_server_connection_server_address");
    const btn_pop_ftp_server_connection_ok = document.querySelector("#btn_pop_ftp_server_connection_ok");

    // List FTP server directory
	const pop_list_ftp_direct_server_address = document.querySelector("#pop_list_ftp_direct_server_address");
	const pop_list_ftp_direct_username = document.querySelector("#pop_list_ftp_direct_username");
	const pop_list_ftp_direct_password = document.querySelector("#pop_list_ftp_direct_password");
    const btn_pop_list_ftp_direct_ok = document.querySelector("#btn_pop_list_ftp_direct_ok");

    // Change directory
	const pop_change_directory_IP_address = document.querySelector("#pop_change_directory_IP_address");
	const pop_change_directory_port_number = document.querySelector("#pop_change_directory_port_number");
	const pop_change_directory_username = document.querySelector("#pop_change_directory_username");
	const pop_change_directory_password = document.querySelector("#pop_change_directory_password");
	const pop_change_directory_enter_name = document.querySelector("#pop_change_directory_enter_name");
    const btn_pop_change_directory_ok = document.querySelector("#btn_pop_change_directory_ok");

     // Download single file from FTP
	const pop_download_single_ftp_file_IP_address = document.querySelector("#pop_download_single_ftp_file_IP_address");
	const pop_download_single_ftp_file_port_number = document.querySelector("#pop_download_single_ftp_file_port_number");
	const pop_download_single_ftp_file_username = document.querySelector("#pop_download_single_ftp_file_username");
	const pop_download_single_ftp_file_password = document.querySelector("#pop_download_single_ftp_file_password");
	const pop_download_single_ftp_file_directory = document.querySelector("#pop_download_single_ftp_file_directory");
	const pop_download_single_ftp_file_document = document.querySelector("#pop_download_single_ftp_file_document");
	const pop_download_single_ftp_file_download_path = document.querySelector("#pop_download_single_ftp_file_download_path");
    const btn_pop_download_single_ftp_file_ok = document.querySelector("#btn_pop_download_single_ftp_file_ok");

    // Download multiple files from FTP
	const pop_download_multiple_files_ftp_IP_address = document.querySelector("#pop_download_multiple_files_ftp_IP_address");
	const pop_download_multiple_files_ftp_port_number = document.querySelector("#pop_download_multiple_files_ftp_port_number");
	const pop_download_multiple_files_ftp_username = document.querySelector("#pop_download_multiple_files_ftp_username");
	const pop_download_multiple_files_ftp_password = document.querySelector("#pop_download_multiple_files_ftp_password");
	const pop_download_multiple_files_ftp_directory = document.querySelector("#pop_download_multiple_files_ftp_directory");
	const pop_download_multiple_files_ftp_path = document.querySelector("#pop_download_multiple_files_ftp_path");
    const btn_pop_download_multiple_files_ftp_ok = document.querySelector("#btn_pop_download_multiple_files_ftp_ok");

    // Download multiple files from FTP
	const pop_download_single_folder_ftp_IP_address = document.querySelector("#pop_download_single_folder_ftp_IP_address");
	const pop_download_single_folder_ftp_port_number = document.querySelector("#pop_download_single_folder_ftp_port_number");
	const pop_download_single_folder_ftp_username = document.querySelector("#pop_download_single_folder_ftp_username");
	const pop_download_single_folder_ftp_password = document.querySelector("#pop_download_single_folder_ftp_password");
	const pop_download_single_folder_ftp_directory = document.querySelector("#pop_download_single_folder_ftp_directory");
	const pop_download_single_folder_ftp_path = document.querySelector("#pop_download_single_folder_ftp_path");
    const btn_pop_download_single_folder_ftp_ok = document.querySelector("#btn_pop_download_single_folder_ftp_ok");

    // Download multiple folders from FTP
	const pop_download_multiple_ftp_folders_IP_address = document.querySelector("#pop_download_multiple_ftp_folders_IP_address");
	const pop_download_multiple_ftp_folders_port_number = document.querySelector("#pop_download_multiple_ftp_folders_port_number");
	const pop_download_multiple_ftp_folders_username = document.querySelector("#pop_download_multiple_ftp_folders_username");
	const pop_download_multiple_ftp_folders_password = document.querySelector("#pop_download_multiple_ftp_folders_password");
	const pop_download_multiple_ftp_folders_directory = document.querySelector("#pop_download_multiple_ftp_folders_directory");
	const pop_download_multiple_ftp_folders_path = document.querySelector("#pop_download_multiple_ftp_folders_path");
    const btn_pop_download_multiple_ftp_folders_ok = document.querySelector("#btn_pop_download_multiple_ftp_folders_ok");

    // Upload single file to FTP
	const pop_upload_single_ftp_file_IP_address = document.querySelector("#pop_upload_single_ftp_file_IP_address");
	const pop_upload_single_ftp_file_port_number = document.querySelector("#pop_upload_single_ftp_file_port_number");
	const pop_upload_single_ftp_file_username = document.querySelector("#pop_upload_single_ftp_file_username");
	const pop_upload_single_ftp_file_password = document.querySelector("#pop_upload_single_ftp_file_password");
	const pop_upload_single_ftp_file_directory = document.querySelector("#pop_upload_single_ftp_file_directory");
	const pop_upload_single_ftp_file_path = document.querySelector("#pop_upload_single_ftp_file_path");
    const btn_pop_upload_single_ftp_file_ok = document.querySelector("#btn_pop_upload_single_ftp_file_ok");

    // Upload multiple files to FTP
	const pop_upload_multiple_ftp_files_IP_address = document.querySelector("#pop_upload_multiple_ftp_files_IP_address");
	const pop_upload_multiple_ftp_files_port_number = document.querySelector("#pop_upload_multiple_ftp_files_port_number");
	const pop_upload_multiple_ftp_files_username = document.querySelector("#pop_upload_multiple_ftp_files_username");
	const pop_upload_multiple_ftp_files_password = document.querySelector("#pop_upload_multiple_ftp_files_password");
	const pop_upload_multiple_ftp_files_directory = document.querySelector("#pop_upload_multiple_ftp_files_directory");
	const pop_upload_multiple_ftp_files_path = document.querySelector("#pop_upload_multiple_ftp_files_path");
    const btn_pop_upload_multiple_ftp_files_ok = document.querySelector("#btn_pop_upload_multiple_ftp_files_ok");

    // Upload single folder to FTP
	const pop_upload_single_ftp_folder_IP_address = document.querySelector("#pop_upload_single_ftp_folder_IP_address");
	const pop_upload_single_ftp_folder_port_number = document.querySelector("#pop_upload_single_ftp_folder_port_number");
	const pop_upload_single_ftp_folder_username = document.querySelector("#pop_upload_single_ftp_folder_username");
	const pop_upload_single_ftp_folder_password = document.querySelector("#pop_upload_single_ftp_folder_password");
	const pop_upload_single_ftp_folder_directory = document.querySelector("#pop_upload_single_ftp_folder_directory");
	const pop_upload_single_ftp_folder_path = document.querySelector("#pop_upload_single_ftp_folder_path");
    const btn_pop_upload_single_ftp_folder_ok = document.querySelector("#btn_pop_upload_single_ftp_folder_ok");

    // Upload multiple folders to FTP
	const pop_upload_multiple_ftp_folders_IP_address = document.querySelector("#pop_upload_multiple_ftp_folders_IP_address");
	const pop_upload_multiple_ftp_folders_port = document.querySelector("#pop_upload_multiple_ftp_folders_port");
	const pop_upload_multiple_ftp_folders_username = document.querySelector("#pop_upload_multiple_ftp_folders_username");
	const pop_upload_multiple_ftp_folders_password = document.querySelector("#pop_upload_multiple_ftp_folders_password");
	const pop_upload_multiple_ftp_folders_directory = document.querySelector("#pop_upload_multiple_ftp_folders_directory");
	const pop_upload_multiple_ftp_folders_path = document.querySelector("#pop_upload_multiple_ftp_folders_path");
    const btn_pop_upload_multiple_ftp_folders_ok = document.querySelector("#btn_pop_upload_multiple_ftp_folders_ok");

    // Upload multiple folders to FTP
	const pop_delete_ftp_files_IP_address = document.querySelector("#pop_delete_ftp_files_IP_address");
	const pop_delete_ftp_files_port = document.querySelector("#pop_delete_ftp_files_port");
	const pop_delete_ftp_files_username = document.querySelector("#pop_delete_ftp_files_username");
	const pop_delete_ftp_files_password = document.querySelector("#pop_delete_ftp_files_password");
	const pop_delete_ftp_files_path = document.querySelector("#pop_delete_ftp_files_path");
    const btn_pop_delete_ftp_files_ok = document.querySelector("#btn_pop_delete_ftp_files_ok");

    // Delete FTP files
	const pop_rename_ftp_file_IP_address = document.querySelector("#pop_rename_ftp_file_IP_address");
	const pop_rename_ftp_file_port_number = document.querySelector("#pop_rename_ftp_file_port_number");
	const pop_rename_ftp_file_username = document.querySelector("#pop_rename_ftp_file_username");
	const pop_rename_ftp_file_password = document.querySelector("#pop_rename_ftp_file_password");
	const pop_rename_ftp_file_old_directory = document.querySelector("#pop_rename_ftp_file_old_directory");
	const pop_rename_ftp_file_directory = document.querySelector("#pop_rename_ftp_file_directory");
    const btn_pop_rename_ftp_file_ok = document.querySelector("#btn_pop_rename_ftp_file_ok");

    // Create FTP directory
	const pop_create_ftp_directory_IP_address = document.querySelector("#pop_create_ftp_directory_IP_address");
	const pop_create_ftp_directory_port_number = document.querySelector("#pop_create_ftp_directory_port_number");
	const pop_create_ftp_directory_username = document.querySelector("#pop_create_ftp_directory_username");
	const pop_create_ftp_directory_password = document.querySelector("#pop_create_ftp_directory_password");
	const pop_create_ftp_directory_name = document.querySelector("#pop_create_ftp_directory_name");
    const btn_pop_create_ftp_directory_ok = document.querySelector("#btn_pop_create_ftp_directory_ok");

    // Delete FTP directory
	const pop_delete_ftp_directory_IP_address = document.querySelector("#pop_delete_ftp_directory_IP_address");
	const pop_delete_ftp_directory_port_number = document.querySelector("#pop_delete_ftp_directory_port_number");
	const pop_delete_ftp_directory_username = document.querySelector("#pop_delete_ftp_directory_username");
	const pop_delete_ftp_directory_password = document.querySelector("#pop_delete_ftp_directory_password");
	const pop_delete_ftp_directory_name = document.querySelector("#pop_delete_ftp_directory_name");
    const btn_pop_delete_ftp_directory_ok = document.querySelector("#btn_pop_delete_ftp_directory_ok");

    // Invoke FTP command
	const pop_invoke_ftp_IP_address = document.querySelector("#pop_invoke_ftp_IP_address");
	const pop_invoke_ftp_port_number = document.querySelector("#pop_invoke_ftp_port_number");
	const pop_invoke_ftp_username = document.querySelector("#pop_invoke_ftp_username");
	const pop_invoke_ftp_password = document.querySelector("#pop_invoke_ftp_password");
	const pop_invoke_ftp_input_command = document.querySelector("#pop_invoke_ftp_input_command");
    const btn_pop_invoke_ftp_ok = document.querySelector("#btn_pop_invoke_ftp_ok");

    // Create new file
	const pop_create_new_file_extension = document.querySelector("#pop_create_new_file_extension");
    const btn_pop_create_new_file_ok = document.querySelector("#btn_pop_create_new_file_ok");

    // Copy files
	const pop_copy_files_source_path = document.querySelector("#pop_copy_files_source_path");
	const pop_copy_files_destination_path = document.querySelector("#pop_copy_files_destination_path");
    const btn_pop_copy_files_ok = document.querySelector("#btn_pop_copy_files_ok");

    // Move files
	const pop_move_files_source_path = document.querySelector("#pop_move_files_source_path");
	const pop_move_files_destination_path = document.querySelector("#pop_move_files_destination_path");
    const btn_pop_move_files_ok = document.querySelector("#btn_pop_move_files_ok");

    // Rename files
	const pop_rename_files_source_path = document.querySelector("#pop_rename_files_source_path");
	const pop_rename_files_old_name = document.querySelector("#pop_rename_files_old_name");
	const pop_rename_files_new_name = document.querySelector("#pop_rename_files_new_name");
    const btn_pop_rename_files_ok = document.querySelector("#btn_pop_rename_files_ok");

    // Delete files
	const pop_delete_file_source_path = document.querySelector("#pop_delete_file_source_path");
    const btn_pop_delete_files_ok = document.querySelector("#btn_pop_delete_files_ok");

    // Delete temporary files
	const pop_delete_temporary_files_source_path = document.querySelector("#pop_delete_temporary_files_source_path");
    const btn_pop_delete_temporary_files_ok = document.querySelector("#btn_pop_delete_temporary_files_ok");

    // Create shortcut files
	const pop_create_file_shortcut_select_file = document.querySelector("#pop_create_file_shortcut_select_file");
    const btn_pop_create_file_shortcut_ok = document.querySelector("#btn_pop_create_file_shortcut_ok");

    // Get files part
	const pop_get_file_part_select_file = document.querySelector("#pop_get_file_part_select_file");
    const btn_pop_get_file_part_ok = document.querySelector("#btn_pop_get_file_part_ok");

    // Print file
	const pop_print_file_source_path = document.querySelector("#pop_print_file_source_path");
    const btn_pop_print_file_ok = document.querySelector("#btn_pop_print_file_ok");

    // Print multiple files
	const pop_print_files_source_path = document.querySelector("#pop_print_files_source_path");
    const btn_pop_print_files_ok = document.querySelector("#btn_pop_print_files_ok");

    // Open folder
	const pop_open_folder_path = document.querySelector("#pop_open_folder_path");
    const btn_pop_open_folder_ok = document.querySelector("#btn_pop_open_folder_ok");

    // Create folder
	const pop_create_folder_path = document.querySelector("#pop_create_folder_path");
	const pop_create_folder_name = document.querySelector("#pop_create_folder_name");
    const btn_pop_create_folder_ok = document.querySelector("#btn_pop_create_folder_ok");

    // Copy folder
	const pop_copy_folder_source_path = document.querySelector("#pop_copy_folder_source_path");
	const pop_copy_folder_destination_path = document.querySelector("#pop_copy_folder_destination_path");
    const btn_pop_copy_folder_ok = document.querySelector("#btn_pop_copy_folder_ok");

    // Move folder
	const pop_move_folder_current_path = document.querySelector("#pop_move_folder_current_path");
	const pop_move_folder_new_path = document.querySelector("#pop_move_folder_new_path");
    const btn_pop_move_folder_ok = document.querySelector("#btn_pop_move_folder_ok");

    // Create shortcut
	const pop_create_shortcut_path = document.querySelector("#pop_create_shortcut_path");
	const pop_create_shortcut_destination_path = document.querySelector("#pop_create_shortcut_destination_path");
    const btn_pop_create_shortcut_ok = document.querySelector("#btn_pop_create_shortcut_ok");

	// Extract Image
	const pop_extract_image_url = document.querySelector("#pop_extract_image_url");
	const btn_extract_image_ok = document.querySelector("#btn_extract_image_ok");

	// Extract Image Response
	var extract_image_response_text  = document.getElementById('extract_image_response_text')
	const btn_extract_image_response_save = document.querySelector("#btn_extract_image_response_save");

	// Record Web
	const btn_record_web_record = document.querySelector("#btn_record_web_record");
	const btn_record_web_stop = document.querySelector("#btn_record_web_stop");
	const btn_record_web_ok = document.querySelector("#btn_record_web_ok");

	// CureBay Web Automation
	const pop_curebay_webautomation_id = document.querySelector("#pop_curebay_webautomation_id");
	const btn_curebay_webautomation_ok = document.querySelector("#btn_curebay_webautomation_ok");

	// PDF Menu
	//const pop_split_pdf_select_pdf = document.querySelector("#pop_split_pdf_select_pdf");
	//const pop_split_pdf_select_destination = document.querySelector("#pop_split_pdf_select_destination");
	//const btn_split_pdf_ok = document.querySelector("#btn_split_pdf_ok");

	// Create_PDF
	const pop_create_pdf_path = document.querySelector("#pop_create_pdf_path");
	const pop_create_pdf_name = document.querySelector("#pop_create_pdf_name");
	const pop_create_pdf_text = document.querySelector("#pop_create_pdf_text");
	const btn_pop_create_pdf_ok = document.querySelector("#btn_pop_create_pdf_ok");
	
    // Split_PDF
	const pop_split_pdf_select_pdf = document.querySelector("#pop_split_pdf_select_pdf");
	const pop_split_pdf_select_destination = document.querySelector("#pop_split_pdf_select_destination");
	const btn_split_pdf_ok = document.querySelector("#btn_split_pdf_ok");

	// Concatenate_PDF
	const pop_concatenate_pdf_select_first = document.querySelector("#pop_concatenate_pdf_select_first");
	const pop_concatenate_pdf_select_second = document.querySelector("#pop_concatenate_pdf_select_second");
	const pop_concatenate_pdf_destination_path = document.querySelector("#pop_concatenate_pdf_destination_path");
	const btn_pop_concatenate_pdf_ok = document.querySelector("#btn_pop_concatenate_pdf_ok");

	// Insert_new_page
	const pop_insert_newpage_pdf_source_path = document.querySelector("#pop_insert_newpage_pdf_source_path");
	const pop_insert_newpage_pdf_page_index = document.querySelector("#pop_insert_newpage_pdf_page_index");
	const pop_insert_newpage_pdf_text = document.querySelector("#pop_insert_newpage_pdf_text");
	const pop_insert_newpage_pdf_destination_path = document.querySelector("#pop_insert_newpage_pdf_destination_path");
	const btn_pop_insert_newpage_pdf_ok = document.querySelector("#btn_pop_insert_newpage_pdf_ok");

	// Insert_existing_page
	const pop_insert_existingpage_pdf_source_path = document.querySelector("#pop_insert_existingpage_pdf_source_path");
	const pop_insert_existingpage_pdf_existing_page = document.querySelector("#pop_insert_existingpage_pdf_existing_page");
	const pop_insert_existingpage_pdf_destination_path = document.querySelector("#pop_insert_existingpage_pdf_destination_path");
	const btn_pop_insert_existingpage_pdf_ok = document.querySelector("#btn_pop_insert_existingpage_pdf_ok");

	// Encrypt_PDF
	const pop_encrypt_pdf_source_path = document.querySelector("#pop_encrypt_pdf_source_path");
	const pop_encrypt_pdf_destination_path = document.querySelector("#pop_encrypt_pdf_destination_path");
	const pop_encrypt_pdf_password = document.querySelector("#pop_encrypt_pdf_password");
	const pop_encrypt_pdf_ok = document.querySelector("#pop_encrypt_pdf_ok");

	// Decrypt_PDF
	const pop_decrypt_pdf_source_path = document.querySelector("#pop_decrypt_pdf_source_path");
	const pop_decrypt_pdf_destination_path = document.querySelector("#pop_decrypt_pdf_destination_path");
	const pop_decrypt_pdf_password = document.querySelector("#pop_decrypt_pdf_password");
	const btn_pop_decrypt_pdf_ok = document.querySelector("#btn_pop_decrypt_pdf_ok");

	// Extract_image_from_PDF
	const pop_extract_image_pdf_source_path = document.querySelector("#pop_extract_image_pdf_source_path");
	const pop_extract_image_pdf_image_path = document.querySelector("#pop_extract_image_pdf_image_path");
	const btn_pop_extract_image_pdf_ok = document.querySelector("#btn_pop_extract_image_pdf_ok");

	// Extract_text_from_PDF
	const pop_extract_text_pdf_source_path = document.querySelector("#pop_extract_text_pdf_source_path");
	const pop_extract_text_pdf_file_path = document.querySelector("#pop_extract_text_pdf_file_path");
	const btn_pop_extract_text_pdf_ok = document.querySelector("#btn_pop_extract_text_pdf_ok");

	// Extract_text_from_PDF_using_OCR
	const pop_extract_text_ocr_pdf_source_path = document.querySelector("#pop_extract_text_ocr_pdf_source_path");
	const pop_extract_text_ocr_pdf_file_path = document.querySelector("#pop_extract_text_ocr_pdf_file_path");
	const btn_pop_extract_text_ocr_pdf_ok = document.querySelector("#btn_pop_extract_text_ocr_pdf_ok");

	// Extract_page_from_PDF
	const pop_extract_page_pdf_start_page = document.querySelector("#pop_extract_page_pdf_start_page");
	const pop_extract_page_pdf_end_page = document.querySelector("#pop_extract_page_pdf_end_page");
	const btn_pop_extract_page_pdf_ok = document.querySelector("#btn_pop_extract_page_pdf_ok");

	// Convert_any_file_to_PDF
	const pop_any_to_pdf_file_path = document.querySelector("#pop_any_to_pdf_file_path");
	const pop_any_to_pdf_pdf_path = document.querySelector("#pop_any_to_pdf_pdf_path");
	const btn_pop_any_to_pdf_ok = document.querySelector("#btn_pop_any_to_pdf_ok");

	// Convert_word_file_to_PDF
	const pop_word_to_pdf_source_path = document.querySelector("#pop_word_to_pdf_source_path");
	const pop_word_to_pdf_destination_path = document.querySelector("#pop_word_to_pdf_destination_path");
	const btn_pop_word_to_pdf_ok = document.querySelector("#btn_pop_word_to_pdf_ok");

	// Convert_excel_file_to_PDF
	const pop_excel_to_pdf_source_path = document.querySelector("#pop_excel_to_pdf_source_path");
	const pop_excel_to_pdf_destination_path = document.querySelector("#pop_excel_to_pdf_destination_path");
	const btn_pop_excel_to_pdf_ok = document.querySelector("#btn_pop_excel_to_pdf_ok");

	// Convert_GIF_file_to_PDF
	const pop_gif_to_pdf_source_path = document.querySelector("#pop_gif_to_pdf_source_path");
	const pop_gif_to_pdf_destination_path = document.querySelector("#pop_gif_to_pdf_destination_path");
	const btn_pop_gif_to_pdf_ok = document.querySelector("#btn_pop_gif_to_pdf_ok");

	// Convert_PDF_file_to_word
	const pop_pdf_to_word_source_path = document.querySelector("#pop_pdf_to_word_source_path");
	const pop_pdf_to_word_destination_path = document.querySelector("#pop_pdf_to_word_destination_path");
	const btn_pop_pdf_to_word_ok = document.querySelector("#btn_pop_pdf_to_word_ok");

	// Convert_PDF_file_to_excel
	const pop_pdf_to_excel_source_path = document.querySelector("#pop_pdf_to_excel_source_path");
	const pop_pdf_to_excel_destination_path = document.querySelector("#pop_pdf_to_excel_destination_path");
	const btn_pop_pdf_to_excel_ok = document.querySelector("#btn_pop_pdf_to_excel_ok");

	// Extract_data_from_webpage
	const pop_extract_data_from_webpage_url = document.querySelector("#pop_extract_data_from_webpage_url");
	const pop_extract_data_from_webpage_output_location = document.querySelector("#pop_extract_data_from_webpage_output_location");
	const btn_pop_extract_data_from_webpage_ok = document.querySelector("#btn_pop_extract_data_from_webpage_ok");

	// Take_screenshot_from_webpage
	const pop_take_screenshot_of_webpage_url = document.querySelector("#pop_take_screenshot_of_webpage_url");
	const pop_take_screenshot_of_webpage_output_location = document.querySelector("#pop_take_screenshot_of_webpage_output_location");
	const btn_pop_take_screenshot_of_webpage_ok = document.querySelector("#btn_pop_take_screenshot_of_webpage_ok");


	const HANDLE_RADIUS = 7;
	const HANDLE_WIDTH = 2.5;
	const NODE_WIDTH = 3;
	const ARROW_HEAD = 5;
	let popupInputId = null;
	let popupOutputId = null;
	let popupname = null;
	let rightConnectId = null;
	let inputConnected = false;
	let outputConnected = false;
	let dragging = false;
	let startPoint = new Map([['x', null], ['y', null]]);
	let connectorArray= [];
	let connectorSequenceArray= [];
	let popupArray = [];
	let popupSequenceArray = [];
	let pathPoints= [];
	let startNode=null;
	let nodesArray = [];
	let nodesArrayRedo = [];
	let my_gradient = ctx.createLinearGradient(0, 0, 0, 50);
	my_gradient.addColorStop(0, "#78909C");
	my_gradient.addColorStop(1, "#B0BEC5");


	const NODE_COLOR_DEFAULT = "#bdbdbd"; //"#4a4677"
	const NODE_COLOR_FAILURE = "red";
	const NODE_COLOR_SUCCESS = "#43A047";
	const NODE_COLOR_IN_PROGRESS = "yellow";
	const CONNECTOR_COLOR_DEFAULT = "#1e1f4b";
	const CONNECTOR_COLOR_SUCCESS = "green";
	const CONNECTOR_COLOR_FAILURE = "red";
	const CONNECTOR_COLOR_IN_PROGRESS = "yellow";

	const FIRST_NODE_STROKE = "#1e1f4b"
	const NODES_STROKE = "#36345e";
	const NODES_TEXT_COLOR = "white";
	const HANDLE_COLOR_DEFAULT = "white";
	const HANDLE_COLOR_CLICK = "#1e1f4b";
	const HANDLE_COLOR_HOVER = "#ffcdd2";
	const HANDLE_COLOR_INTUTION = "#81C784";
	let NEW_NODE_X = 0;
	let NEW_NODE_Y = 0;
	let seqName = "node ";
	let excel_img = new Image();
	excel_img.src = "imgs/excel_reg.svg";

	resizeCanvas();


//--------------*CLASSES AND METHODS----------------------------------------------------

	class Node{
		constructor(x, y, w, h, isDragging,leftConnected, rightConnected, inputHandleFill, outputHandleFill, nodeText, nodeSequence, nodeColor){
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			this.isDragging = isDragging;
			this.leftConnected = leftConnected;
			this.rightConnected = rightConnected;
			this.inputHandleFill = typeof inputHandleFill !== 'undefined' ? inputHandleFill : HANDLE_COLOR_DEFAULT;
			this.outputHandleFill = typeof outputHandleFill !== 'undefined' ? outputHandleFill : HANDLE_COLOR_DEFAULT;
			this.nodeText = typeof nodeText !== 'undefined' ? nodeText : "";
			this.nodeSequence = nodeSequence;
			this.nodeColor = typeof nodeColor !== 'undefined' ? nodeColor : NODE_COLOR_DEFAULT;
			// this.nodeColor = nodeColor;
			// this.src = src;
			// this.fillStyle = this.fillStyle ||"#ffffff";
		}
		create(ctx){
			ctx.fillStyle = this.nodeColor;
			ctx.strokeStyle = NODES_STROKE;
			ctx.lineWidth = NODE_WIDTH;
			ctx.font = "13px Roboto";
			ctx.fontWeight = "300";
			ctx.textAlign = "center";
			ctx.textBaseline = "bottom";
			ctx.fillText(this.nodeText.toUpperCase(), this.x + this.w/2, this.y);
			ctx.strokeRect(this.x, this.y, this.w, this.h);
			ctx.fillRect(this.x, this.y, this.w, this.h);
			ctx.fillStyle = FIRST_NODE_STROKE;
			ctx.textBaseline = "middle";
			ctx.fillText(this.nodeSequence.toUpperCase(), this.x+this.w/2, this.y + this.h/2);
			// ctx.drawImage(this.src, this.x+this.w/2, this.y + this.h/2, this.w/4, this.h/4);

			

			//INPUT HANDLE
			ctx.beginPath();
			ctx.fillStyle = this.inputHandleFill;
			ctx.lineWidth = HANDLE_WIDTH;
			ctx.arc(this.x, Math.floor(this.y + (this.h)/2), HANDLE_RADIUS, 0, Math.PI*2, false);
			ctx.fill();
			ctx.stroke();

			//OUTPUT HANDLE
			ctx.beginPath();
			ctx.fillStyle = this.outputHandleFill;
			ctx.lineWidth = HANDLE_WIDTH;
			ctx.arc(this.x + this.w, Math.floor(this.y + (this.h)/2), HANDLE_RADIUS, 0, Math.PI*2, false);
			ctx.fill();
			ctx.stroke();
		}
		createFirst(ctx){
			ctx.beginPath();
			ctx.fillStyle = this.nodeColor;
			ctx.strokeStyle = FIRST_NODE_STROKE;
			ctx.lineWidth = NODE_WIDTH;
			ctx.arc(this.x, this.y, Math.floor(this.w/2.5), 0, Math.PI*2, false);
			ctx.fill();
			ctx.stroke();
			ctx.font = "10px Roboto";
			ctx.fillStyle = FIRST_NODE_STROKE;
			ctx.fontWeight = "300";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText("START NODE", this.x, this.y);
			

			//OUTPUT HANDLE
			ctx.beginPath();
			ctx.fillStyle = this.outputHandleFill;
			ctx.lineWidth = HANDLE_WIDTH;
			ctx.arc(this.x + Math.floor(this.w/2.5), this.y, HANDLE_RADIUS, 0, Math.PI*2, false);
			ctx.fill();
			ctx.stroke();
		}
		isStartNodeSelected(x, y){
			return(Math.sqrt((x-this.x)*(x-this.x) + 
				  (y-Math.floor(this.y + (this.h)/2))*(y-Math.floor(this.y + (this.h)/2))) <= this.w/2)
		}
		startNodeHandleSelected(x, y){
			if(Math.sqrt(x-Math.floor(this.x + this.w/2.5))*(x-Math.floor(this.x + this.w/2.5)) + 
				(y-this.y)*(y-this.y) <= this.w/2.5){
				return "output";
			}
		}
		isNodeSelected(x, y){
			return( x>=this.x
					&& x<=Math.floor(this.x + this.w)
					&& y>=this.y
					&& y<=Math.floor(this.y + this.h));
		}
		handleSelected(x, y){
			if(Math.sqrt((x-this.x)*(x-this.x) + 
				(y-Math.floor(this.y + (this.h)/2))*(y-Math.floor(this.y + (this.h)/2))) <= HANDLE_RADIUS){
				return "input";
			}
			else if (Math.sqrt((x-(this.x + this.w))*(x-(this.x + this.w)) + 
				(y-(Math.floor(this.y + (this.h)/2)))*(y-(Math.floor(this.y + (this.h)/2)))) <= HANDLE_RADIUS) {
				return "output";
			}
		}
	}

	class Connector{
		constructor(startX, startY, endX, endY, inputNodeId, outputNodeId, connectorColor){
			this.startX = startX;
			this.startY = startY;
			this.endX = endX;
			this.endY = endY;
			this.inputNodeId = typeof inputNodeId !== 'undefined' ? inputNodeId : null;
			this.outputNodeId = typeof outputNodeId !== 'undefined' ? outputNodeId : null;
			this.connectorColor = typeof connectorColor !== 'undefined' ? connectorColor : CONNECTOR_COLOR_DEFAULT;
		}
			drawConnectorPath(ctx){
			ctx.lineWidth = 3;
			ctx.lineCap = "round";
			ctx.lineJoin = "round";
			ctx.strokeStyle = this.connectorColor;
			ctx.fillStyle = this.connectorColor;

			ctx.beginPath();
			ctx.moveTo(this.startX, this.startY);

			//BEZIER CURVE WITH DYNAMIC MID CONTROL POINTS	
			ctx.bezierCurveTo(Math.floor(this.startX + ((this.endX - this.startX)/2)), this.startY, 
			Math.floor(this.startX + ((this.endX - this.startX)/2)), this.endY , this.endX, this.endY) ;
			
			//ARROW HEAD
			if (this.startX != this.endX) {
				//LEFT
				if (this.endX < this.startX) {
					ctx.lineTo(Math.floor(this.endX + ARROW_HEAD), Math.floor(this.endY - ARROW_HEAD));
					ctx.lineTo(this.endX,this.endY);
					ctx.lineTo(Math.floor(this.endX + ARROW_HEAD), Math.floor(this.endY + ARROW_HEAD));
				}
				//RIGHT
				else{
					ctx.lineTo(Math.floor(this.endX - ARROW_HEAD), Math.floor(this.endY - ARROW_HEAD));
					ctx.lineTo(this.endX,this.endY);
					ctx.lineTo(Math.floor(this.endX - ARROW_HEAD), Math.floor(this.endY + ARROW_HEAD));
				}
			}
			ctx.stroke();
		}
	}

	class Popup{
		constructor(start, end,name, values=[]){
			this.start = start;
			this.end = end;
			this.name =name;
			this.values = values;
		}
	}


	function getMousePos(canvas,evt){
		var rect=canvas.getBoundingClientRect();
		return{
			x:evt.clientX-rect.left,
			y:evt.clientY-rect.top
		};

	} 

	var abcd;
	
	function nodesMenuClick(e){
		console.log(e.target.text);
		// abcd=e.target.text;	
		if (nodesArray.length==0){
			NEW_NODE_X = 200;
			NEW_NODE_Y = 47;
			nodesArray.push(new Node(NEW_NODE_X, NEW_NODE_Y, 80, 50, false, false, false, undefined, undefined,
								 e.target.text, seqName.concat(nodesArray.length + 1), undefined));
		}
		else{
			if (nodesArray.length % 4 != 0) {
			// if (NEW_NODE_Y > 449) {
			// 	NEW_NODE_Y = 150;
			// }
			NEW_NODE_X = nodesArray[nodesArray.length-1].x + 200;
			NEW_NODE_Y = nodesArray[nodesArray.length-1].y;
			}

			//NEXT LINE NODES
			else{
				NEW_NODE_X = 200;
				NEW_NODE_Y = nodesArray[nodesArray.length-1].y + 120;
			}

			if (nodesArray.length!=0){
				nodesArray.push(new Node(NEW_NODE_X, NEW_NODE_Y, 80, 50, false, false, false, undefined, undefined,
									 e.target.text, seqName.concat(nodesArray.length + 1), undefined));
			}
		}

		nodesArray[nodesArray.length - 1].create(ctx);
		nodesArrayRedo = nodesArray;
		// console.log(nodesArrayRedo);
		
	}

	// db = [nodeArray, connectorArray]

	function clearNodes(e){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	function getCookie(name) {
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
	var csrftoken = getCookie('csrftoken');
	function csrfSafeMethod(method) {
		// these HTTP methods do not require CSRF protection
		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}
	$.ajaxSetup({
		beforeSend: function(xhr, settings) {
			if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
				xhr.setRequestHeader("X-CSRFToken", csrftoken);
			}
		}
	});
	
	function buttonSaveTask(e) {
		// var abc = [nodesArray, connectorArray]
		// startNode
		var task_name = prompt("Please enter Task Name:");
		console.log(task_name)
		pop_text = []
		debugger
		for (i = 0; i < nodesArray.length; i++) {
			pop_text.push(nodesArray[i]['nodeText'])
		}
		post_data = {'product_name':task_name,'start_node':JSON.stringify(startNode),'node_array':JSON.stringify(nodesArray),'connection_array':JSON.stringify(connectorArray),'popup_array':JSON.stringify(popupArray),'pop_list':JSON.stringify(pop_text)}
		$.ajax({
			url : "/task_lists/"+task_name, // the endpoint
			type : "POST", // http method
			dataType: 'json',
			data: post_data,
			success:  function(response){
			   alert(response.success);
		   }
		});

	}
	function create_task_func(e) {
		post_data = {}
		$.ajax({
			url : "/create_task_btn", // the endpoint
			type : "POST", // http method
			dataType: 'json',
			data: post_data,
			success:  function(response){
			   alert(response.success);
		   }
		});

	}
	
	function run_task_func(e) {
		post_data = []
		for (i = 0; i < nodesArray.length; i++) {
			post_data.push(nodesArray[i]['nodeText'])
		}
		// var abc = [nodesArray, connectorArray]
		// var task_name = prompt("Please enter Task Name:");
		// console.log(task_name)
		pop_data = {'popup':JSON.stringify(post_data)}
		$.ajax({
			url : "/run_task", // the endpoint
			type : "POST", // http method
			dataType: 'json',
			data: pop_data,
			success:  function(response){
			   alert(response.success);
			   console.log(response.success);    ////---------------- TODO: Add 'nodeSequence' to response.success object --------
			   ctx.clearRect(0, 0, canvas.width, canvas.height);
			   // if (response.success == "Successfully! Please check"){
			   // 	nodesArray[nodesArray.length - 1].nodeColor = NODE_COLOR_SUCCESS;
			   // }
			   startNode.createFirst(ctx);

			   //creating nod
			   nodesArray.forEach(node=>{
			   	if (response.success[node.nodeText] == "success") {
			   		node.nodeColor = NODE_COLOR_SUCCESS;
			   	}
		   		node.create(ctx);
			   })

			   //creating connectors
			   connectorArray.forEach(connector=>{
			   	connector.drawConnectorPath(ctx);
			   })
		   }
		});

	}
	function click_task_func(e) {
		// debugger
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		nodesArray = []
		connectorArray = []
		task_click = {'task_button':e.target.textContent}
        $.ajax({
			url : "/task_lists", // the endpoint
			type : "POST", // http method
			data: task_click,
			success:  function(response){
				ctx.clearRect(0, 0, canvas.width, canvas.height);				//creating start node
				response_connectorArray = JSON.parse(response.connection_array)
				response_nodesArray = JSON.parse(response.node_array)
				response_startnodeArray = JSON.parse(response.start_node)
				// response_nodesArray[0][1]

				if (response_nodesArray.length!=0){
					for (var i = 0; i < response_nodesArray.length; i++) {
						nodesArray.push(new Node(response_nodesArray[i]['x'], response_nodesArray[i]['y'], response_nodesArray[i]['w'], response_nodesArray[i]['h'], response_nodesArray[i]['isDragging'], response_nodesArray[i]['leftConnected'],response_nodesArray[i]['rightConnected'], response_nodesArray[i]['inputHandleFill'], response_nodesArray[i]['outputHandleFill'],
										response_nodesArray[i]['nodeText'], response_nodesArray[i]['nodeSequence']));
					}
						
				}
				
				if (response_connectorArray.length!=0){
					for (var i = 0; i < response_connectorArray.length; i++) {
						connectorArray.push(new Connector(response_connectorArray[i]['startX'], response_connectorArray[i]['startY'], response_connectorArray[i]['endX'], response_connectorArray[i]['endY'], response_connectorArray[i]['inputNodeId'], response_connectorArray[i]['outputNodeId']));
					}
				}
				
				// {"x":50,"y":100,"w":100,"h":70,"isDragging":false,"leftConnected":false,"rightConnected":true,"inputHandleFill":"white","outputHandleFill":"red","nodeText":"","nodeSequence":"startNode"}
				startNode = new Node(response_startnodeArray['x'], response_startnodeArray['y'], response_startnodeArray['w'], response_startnodeArray['h'], response_startnodeArray['isDragging'], response_startnodeArray['leftConnected'],response_startnodeArray['rightConnected'], response_startnodeArray['inputHandleFill'], response_startnodeArray['outputHandleFill'],
										response_startnodeArray['nodeText'], response_startnodeArray['nodeSequence']);
				startNode.createFirst(ctx);

				//creating nod
				nodesArray.forEach(node=>{

					node.create(ctx);
				})

				//creating connectors
				connectorArray.forEach(connector=>{
					connector.drawConnectorPath(ctx);
				})
						// node.load_project(nodesArray,connectorArray)
					   // alert(response.success);
		}
			
    });
	}

	// function load_project(e){
	// 	debugger
	// 	// db = query


	// 	//clear screen
	// 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// 	//creating start node
	// 	startNode.createFirst(ctx);

	// 	//creating node
	// 	db[0].forEach(node=>{
	// 		node.create(ctx);
	// 	})

	// 	//creating connectors
	// 	db[1].forEach(connector=>{
	// 		connector.drawConnectorPath(ctx);
	// 	})
	// }

	function undoNodes(e){
		console.log("p");
		debugger
		nodesArray.splice(-1,1);
		connectorArray.splice(-1,1);

		console.log(nodesArray);
		console.log(nodesArrayRedo);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		let startNode = new Node(50, 50, 100, 70, false, false, false);
		startNode.createFirst(ctx);
		nodesArray.forEach(node=>{
			node.create(ctx);
		})
		connectorArray.forEach(connector=>{
			connector.drawConnectorPath(ctx);
		})
		
	}

	function redoNodes(e){
		console.log(nodesArrayRedo);
		console.log(nodesArray);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		let startNode = new Node(50, 50, 100, 70, false, false, false);
		startNode.createFirst(ctx);
		nodesArrayRedo.forEach(node=>{
			node.create(ctx);
		})
	}

	function resizeCanvas(){
		canvas.style.width ='100%';
		canvas.style.height='100%';

	  // set the internal size to match
	  canvas.width  = canvas.offsetWidth;
	  canvas.height = canvas.offsetHeight;
		
		if (nodesArray.length != 0) {
		connectorArray.forEach(path=>{
				ctx.beginPath();
				ctx.moveTo(path[0].x, path[0].y);
				drawConnectorPath(path[0].x, path[0].y, path[1].x, path[1].y)
				ctx.stroke();
			})
			startNode.createFirst(ctx);
			nodesArray.forEach(node=>{
				node.create(ctx);
			})
		}
	}



	function mouseDown(e){
		var mousePos = getMousePos(canvas,e);
		//ENABLING NODE DRAG
		if (startNode.isStartNodeSelected(mousePos.x, mousePos.y)) {
			dragging = true;
			canvas.style.cursor = "grabbing";
			startNode.isDragging = true;
		}
		nodesArray.forEach(node=>{
			// debugger;
			if (node.isNodeSelected(mousePos.x, mousePos.y)){
				dragging = true;
				canvas.style.cursor = "grabbing";
				node.isDragging = true;
				console.log(nodesArray);
			}
		})
		//ENABLING CONNECTORS
		if (!dragging) {
			if (startNode.rightConnected != true) {
				if (startNode.startNodeHandleSelected(mousePos.x, mousePos.y) == "output") {
					nodesArray.forEach(node=>{
						if (node.leftConnected != true) {
							node.inputHandleFill = HANDLE_COLOR_INTUTION;
						}
						node.create(ctx);
					})
					console.log("yee");
					canvas.style.cursor = "pointer";
					startNode.outputHandleFill = HANDLE_COLOR_CLICK;
					startNode.createFirst(ctx);
					outputConnected = true;
					startNode.rightConnected = true;
					rightConnectId = "startNode";
					imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
					connectorArray.push(new Connector(mousePos.x, mousePos.y, mousePos.x, mousePos.y, null, "startNode"));
				}
			}
			if (nodesArray.length != 0) {
				for (var i = 0; i < nodesArray.length; i++) {
					console.log(i)
					//INPUT IS CLICKED
					if (nodesArray[i].handleSelected(mousePos.x, mousePos.y) == "input") {
						canvas.style.cursor = "pointer";
						inputConnected = true;

					}
					//OUTPUT IS CLICKED
					else if(nodesArray[i].rightConnected != true){
						if (nodesArray[i].handleSelected(mousePos.x, mousePos.y) == "output") {
							canvas.style.cursor = "pointer";
							nodesArray[i].outputHandleFill = HANDLE_COLOR_CLICK;

							// ACTIVATE INPUT INTUTIONS
							for (var j = 0; j < nodesArray.length; j++) {
								if (j != i) {
									if (nodesArray[j].leftConnected != true) {
										nodesArray[j].inputHandleFill = HANDLE_COLOR_INTUTION;
										nodesArray[j].create(ctx);
									}
								}
							}

							nodesArray[i].create(ctx);
							outputConnected = true;
							nodesArray[i].rightConnected = true;
							rightConnectId = i;
							imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
							connectorArray.push(new Connector(mousePos.x, mousePos.y, mousePos.x, mousePos.y, null, i));
							console.log(connectorArray);
							return;
						}
					}
				}
			}	
		}		
	}


	function mouseMove(e){
		var mousePos = getMousePos(canvas,e);
		

		//DRAG NODE
		if (dragging){   
			// canvas.style.cursor = "grabbing";
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			if (startNode.isDragging == true) {
				if (startNode.rightConnected == false) {
					startNode.x = mousePos.x;
					startNode.y = mousePos.y;
				}
				if (startNode.rightConnected == true) {
					connectorArray.forEach(connector=>{
						if (connector.outputNodeId == "startNode"){
							connector.startX = startNode.x + Math.floor((startNode.w)/2); 
							connector.startY = startNode.y;
							console.log(startNode);
						}
						startNode.x = mousePos.x;
						startNode.y = mousePos.y;
						// nodesArray[i].create(ctx);
					})
				}
				startNode.createFirst(ctx);
				connectorArray.forEach(connector=>{
					connector.drawConnectorPath(ctx);
				})
			}
			for (var i = 0; i < nodesArray.length; i++) {		
				if (nodesArray[i].isDragging == true) {
					//NOTHING CONNECTED
					if (nodesArray[i].leftConnected == false && nodesArray[i].rightConnected == false) {
						nodesArray[i].x = mousePos.x - nodesArray[i].w/2;
						nodesArray[i].y = mousePos.y - nodesArray[i].h/2;
					}
					//ONLY INPUT CONNECTED
					if (nodesArray[i].leftConnected == true && nodesArray[i].rightConnected == false) {
						connectorArray.forEach(connector=>{
							if (connector.inputNodeId == i){
								connector.endX = nodesArray[i].x; 
								connector.endY = Math.floor(nodesArray[i].y + (nodesArray[i].h)/2);
								console.log(nodesArray);
							}
						})
						nodesArray[i].x = mousePos.x - nodesArray[i].w/2;
						nodesArray[i].y = mousePos.y - nodesArray[i].h/2;
					}
					//ONLY OUTPUT CONNECTED
					if (nodesArray[i].leftConnected == false && nodesArray[i].rightConnected == true) {
						connectorArray.forEach(connector=>{
							if (connector.outputNodeId == i){
								connector.startX = nodesArray[i].x + nodesArray[i].w; 
								connector.startY = Math.floor(nodesArray[i].y + (nodesArray[i].h)/2);
								console.log(nodesArray);
							}
						})
						nodesArray[i].x = mousePos.x - nodesArray[i].w/2;
						nodesArray[i].y = mousePos.y - nodesArray[i].h/2;
					}
					//BOTH INPUT OUTPUT CONNECTED
					if (nodesArray[i].leftConnected == true && nodesArray[i].rightConnected == true) {
						connectorArray.forEach(connector=>{
							if (connector.inputNodeId == i){
								connector.endX = nodesArray[i].x; 
								connector.endY = Math.floor(nodesArray[i].y + (nodesArray[i].h)/2);
							}
							if (connector.outputNodeId == i) {
								connector.startX = nodesArray[i].x + nodesArray[i].w; 
								connector.startY = Math.floor(nodesArray[i].y + (nodesArray[i].h)/2);
								connector.drawConnectorPath(ctx);
							}
						})
						nodesArray[i].x = mousePos.x - nodesArray[i].w/2;
						nodesArray[i].y = mousePos.y - nodesArray[i].h/2;
					}
					startNode.createFirst(ctx);
					nodesArray[i].create(ctx);
					connectorArray.forEach(connector=>{
						connector.drawConnectorPath(ctx);
					})
				}
				//RECREATE NODES WHICH ARE NOT BEEN DRAGGED WHILE ANY OTHER IS DRAGGING
				if (startNode.isDragging == false) {
					startNode.createFirst(ctx);
				}
				if (nodesArray[i].isDragging == false){
					startNode.createFirst(ctx);
					nodesArray[i].create(ctx);
				}

			}
		}


		if (!dragging) {
			canvas.style.cursor = "default";
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			if (startNode.rightConnected == false) {
				startNode.outputHandleFill = HANDLE_COLOR_DEFAULT;
				// startNode.createFirst(ctx);
			}
			nodesArray.forEach(node=>{
				if (node.rightConnected == false) {
					node.outputHandleFill = HANDLE_COLOR_DEFAULT;
					// node.create(ctx);
				}
			})

			//HOVER ON START NODE
			if (startNode.isStartNodeSelected(mousePos.x, mousePos.y)) {
				canvas.style.cursor = "grab";
			}
			//HOVER ON START NODE CONNECTOR
			if (startNode.startNodeHandleSelected(mousePos.x, mousePos.y) == "output") {
				canvas.style.cursor = "pointer";
				if (startNode.rightConnected == false) {
					startNode.outputHandleFill = HANDLE_COLOR_HOVER;
					// startNode.createFirst(ctx);
				}
			}

			nodesArray.forEach(node=>{
				//HOVER ON NODE
				if(node.isNodeSelected(mousePos.x, mousePos.y)){
					canvas.style.cursor = "grab";
				}
				//HOVER ON NODE CONNECTORS
				if (node.handleSelected(mousePos.x, mousePos.y) == "input") {
					canvas.style.cursor = "pointer";

					
					
				}
				else if (node.handleSelected(mousePos.x, mousePos.y) == "output") {
					canvas.style.cursor = "pointer";
					if (node.rightConnected == false) {
						node.outputHandleFill = HANDLE_COLOR_HOVER;
						// node.create(ctx);
					}
				}
			})
			//OUTPUT TO INPUT CONNECTION
			if (outputConnected){
				canvas.style.cursor = "pointer";
				// RETRIEVING RUBBER LINE
				connectorArray[connectorArray.length - 1].endX = mousePos.x;
				connectorArray[connectorArray.length - 1].endY = mousePos.y;
				ctx.putImageData(imageData, 0, 0);
				connectorArray[connectorArray.length - 1].drawConnectorPath(ctx);
			}
			startNode.createFirst(ctx);
			nodesArray.forEach(node=>{
				node.create(ctx);
			})
			connectorArray.forEach(path=>{
				path.drawConnectorPath(ctx);
			})
			
		}
	}
			



	function mouseUp(e){
		var mousePos = getMousePos(canvas,e);
		if (dragging) {
			canvas.style.cursor = "grab";
			dragging = false;
			startNode.isDragging = false;
			nodesArray.forEach(node=>{
				if (node.isNodeSelected(mousePos.x, mousePos.y)){
					node.isDragging = false;
				}
			})
		}
		// IF CONNECTED TO ANY INPUT
		if (outputConnected) {
			for (var i = 0; i < nodesArray.length; i++){
				if (i != rightConnectId && nodesArray[i].leftConnected != true) {
					if (nodesArray[i].handleSelected(mousePos.x, mousePos.y) == "input") {
						outputConnected = false;
						nodesArray[i].leftConnected = true;
						console.log("left_node");
						nodesArray[i].inputHandleFill = HANDLE_COLOR_CLICK;//red color//
						console.log("colorchanged to red ");
						nodesArray[i].create(ctx);
						console.log(abcd);
						if (startNode.rightConnected == true) {
							startNode.outputHandleFill = HANDLE_COLOR_CLICK;//red color//     
						}
						abcd=nodesArray[i].nodeText;
							// EXCEL POPUP STARTS

							if(abcd == "SMS")
							{			
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_sms");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd == "Call")
							{			
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_call");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd == "Extract Image")
							{			
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_extract_image");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd == "Record Web")
							{			
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_record_web");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							

							else if(abcd == "CureBay Web Automation")
							{			
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_curebay_webautomation");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd == "Open Excel")
							{			
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_open_excel");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Delete Excel")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_del_excel");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Filter Excel")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_filter");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Move Excel")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_move_excel");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Create Excel")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_create_excel");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Rename Excel")
								{
									console.log("condition entered");
									var popup = document.querySelector("#modalOne_rename_excel");
									popup.style.display = "block"; popup.style.overflow = "auto";
									startNode.createFirst(ctx);
								}

							else if(abcd== "Copy Excel")
								{
									console.log("condition entered");
									var popup = document.querySelector("#modalOne_copy_excel");
									popup.style.display = "block"; popup.style.overflow = "auto";
									startNode.createFirst(ctx);
								}

							else if(abcd== "Copy Data from one Excel to another")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_copy_data_excel");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Search Values in Excel")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_search_value");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Create sheet")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_create_sheet");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Select sheet")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_sel_sheet");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Rename sheet")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_rename_sheet");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Delete sheet")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_del_sheet");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Copy Data from one Sheet to another")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_copy_data_sheet");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Delete column")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_del_column");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							else if(abcd== "Delete all rows and columns")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_del_row_col");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete row")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_del_row");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Vlookup on same excel")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_vlookupsamesheet");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Vlookup on two excel")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_vlookup_two");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Formula")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_formula");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Filter Excel")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_filter");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Remove duplicates")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_remove_duplicate");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Max Column")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_maxcolumn");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Max Row")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_maxrow");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Roundoff values of columns")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_roundoff_column");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Password")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_password");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Sum If")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_sum_if");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Pivot table")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_pivot_table");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Paste special")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_paste_special");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Change header name")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_change_header");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Change datatype of column")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_col_datatype");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Convert Excel into CSV")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_excel_to_csv");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Read cell data")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_read_cell_data");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Expand all")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_expand_all");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Collapse all")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_collapse_all");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Sort Ascending or Descending")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_sort_asc_desc");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Run macros")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_run_macros");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							//EXCEL POPUP ENDS
							//CSV POPUP STARTS
							else if(abcd== "Read from CSV")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_read_from_csv");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Write to CSV")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_write_to_csv");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							//CSV POPUP ENDS
							//DIRECT WEB ACCESS POPUP STARTS
							else if(abcd== "Download small files from web")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_download_small_files");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Download large files from web")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_download_large_files");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Download multiple files from web")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_multiple_files");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							//DIRECT WEB ACCESS POPUP ENDS
							//EMAIL POPUP STARTS
							else if(abcd== "Send Email")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_send_email");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Retrieve Email")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_retrieve_email");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Send HTML Message")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_send_html_message");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Send Plain Text Message")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_send_plaintext_message");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Attach Excel")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_attach_excel");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Attach Word")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_attach_word");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Attach PPT")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_attach_ppt");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Attach Zip")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_attach_zip");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Attach Any Other Format")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_attach_any_otherformat");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Save Attachment")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_save_attachment");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete All Messages")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_del_all_messages");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete Read Messages")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_del_read_messages");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete Unread Messages")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_del_unread_messages");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							//EMAIL POPUP ENDS
							// FILES POPUP STARTS
							else if(abcd== "Create new file")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_create_new_file");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Copy files")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_copy_files");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Move files")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_move_files");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Rename files")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_rename_files");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete files")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_delete_file");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete temporary files")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_delete_temporary_file");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Create files shortcut")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_create_files_shortcut");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Get files part")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_get_file_part");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Print file")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_print_file");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Print multiple files")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_print_files");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Zip files")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_create_zip_file");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Unzip files")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_get_unzip_file");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							// FILES POPUP ENDS
							// FOLDER POPUP STARTS
							else if(abcd== "Open folder")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_open_folder");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Create folder")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_create_folder");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Copy folder")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_copy_folder");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Move folder")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_move_folder");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Rename folder")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_rename_folder");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Create shortcut")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_create_shortcut");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete shortcut")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_del_folder");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							// FOLDER POPUP ENDS
							// FTP POPUP STARTS
							else if(abcd== "Change directory")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_change_ftp_directory");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Download single file from FTP")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_download_single_ftp_file");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Download multiple files from FTP")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_download_multiple_ftp_files");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Download single folder from FTP")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_download_single_ftp_folder");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Download multiple folders from FTP")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_download_multiple_ftp_folders");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Upload single file to FTP")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_upload_single_ftp_file");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Upload multiple files to FTP")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_upload_multiple_ftp_files");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Upload single folder to FTP")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_upload_single_ftp_folder");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Upload single folder to FTP")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_upload_single_ftp_folder");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Upload multiple folders to FTP")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_upload_multiple_ftp_folders");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete FTP file")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_delete_ftp_files");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Rename FTP files")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_rename_ftp_file");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Create FTP directory")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_create_ftp_directory");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete FTP directory")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_delete_ftp_directory");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Invoke FTP command")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_invoke_ftp");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}

							//VASUDHA FTP
							else if(abcd== "Change Folder on FTP Server")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_change_folder_ftp");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Create Folder on FTP Server")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_create_folder_ftp");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete Folder")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_del_folder");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete File on FTP Server")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_file_delete_ftp");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Download File from FTP Server")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_file_download_ftp");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Rename File on FTP Server")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_file_rename_ftp");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Upload File on FTP Server")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_file_upload_ftp");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Delete Folder on FTP Server")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_folder_delete_ftp");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Upload Folder on FTP Server")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_folder_upload_ftp");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "FTP Connect")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_ftp_connect");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "FTP Disconnect")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_ftp_disconnect");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Secure FTP Connection")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_ftp_secure");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "FTP Connection")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_ftp_server_connection");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "List FTP Server Directory")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_list_ftp_direct");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
			
							// FTP POPUP ENDS
							// PDF POPUP STARTS
							else if(abcd== "Create PDF")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_create_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Extract Image From Pdf")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_split_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Concatenate PDF")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_concatenate_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Insert New Page")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_insert_newpage_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Insert Existing Page")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_insert_existingpage_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Encrypt PDF")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_encrypt_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Decrypt PDF")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_decrypt_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Extract Image from PDF")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_extract_image_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Extract Text from PDF")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_extract_text_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Extract Text from PDF using OCR")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_extract_text_ocr_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Extract Pages from PDF")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_extract_page_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Convert Any File to PDF")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_any_to_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Convert Word File to PDF")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_word_to_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Convert Excel File to PDF")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_excel_to_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Convert GIF File to PDF")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_gif_to_pdf");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Convert PDF to Word")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_pdf_to_word");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Convert PDF File to Excel")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_pdf_to_excel");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							// PDF POPUP ENDS
							// WEB DATA EXTRACTION POPUP STARTS
							else if(abcd== "Extract data from webpage")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_extract_data_from_webpage");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Take screenshot of webpage")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_take_screenshot_of_webpage");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							// WEB DATA EXTRACTION POPUP ENDS
							// ERROR HANDLE POPUP STARTS
							else if(abcd== "Begin Error Handling")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_begin_error_handling");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "End Error Handling")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_end_error_handling");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Continue Error Handling")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_continue_error_handling");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);     
							}
							else if(abcd== "Send Error Email")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_eh_send_email");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);     
							}
							else if(abcd== "Take Snapshot")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_take_snapshot");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);     
							}
							else if(abcd== "Log Data into file")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_log_data_into_file");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							else if(abcd== "Stop Task")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_stop_task");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							}
							// ERROR HANDLE POPUP ENDS
							// OCR POPUP STARTS
							else if(abcd== "Create Tesseract OCR")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_Tesse_OCR_engine");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);     
							}
							else if(abcd== "Create Modi OCR")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_modi_OCR_enine");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);     
							}
							else if(abcd== "Text Extract OCR")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_text_extract_OCR");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);     
							}
							else if(abcd== "Image Capture URL")
							{
								console.log("condition entered");
								var popup = document.querySelector("#modalOne_image_capture_url");
								popup.style.display = "block"; popup.style.overflow = "auto";
								startNode.createFirst(ctx);
							// OCR POUP ENDS
							}
						// RESET INTUTION-changes node color to white again if any  node is not connected
						for (var j = 0; j < nodesArray.length; j++) {
							if (nodesArray[j].leftConnected == false) {
								nodesArray[j].inputHandleFill = HANDLE_COLOR_DEFAULT;//white color//
								nodesArray[j].create(ctx);
							}
						}
						connectorArray[connectorArray.length - 1].endX = mousePos.x;
						connectorArray[connectorArray.length - 1].endY = mousePos.y;
						connectorArray[connectorArray.length - 1].inputNodeId = i;
						popupOutputId = connectorArray[connectorArray.length - 1].inputNodeId;
						popupInputId = connectorArray[connectorArray.length - 1].outputNodeId;
						popupname = nodesArray[nodesArray.length -1].nodeText
						console.log(nodesArray);
						console.log(connectorArray);
					}
				}
			}
			// IF ABOVE SEARCH FAILS/IF NOT CONNECTED TO ANY INPUT
			if (outputConnected) {
				console.log("no");
				outputConnected = false;
				// if (startNode.rightConnected == false) {
				// 	startNode.outputHandleFill = HANDLE_COLOR_HOVER;
				// 	startNode.createFirst(ctx);
				// }
				if (rightConnectId != "startNode") {
					nodesArray[rightConnectId].rightConnected = false;
					nodesArray[rightConnectId].outputHandleFill = HANDLE_COLOR_DEFAULT;
				}
				if (rightConnectId == "startNode") {
					startNode.rightConnected = false;
					startNode.outputHandleFill = HANDLE_COLOR_DEFAULT;
				}

				//RESET INTUTION
				for (var j = 0; j < nodesArray.length; j++) {
						if (nodesArray[j].leftConnected == false) {
							nodesArray[j].inputHandleFill = HANDLE_COLOR_DEFAULT;
						}
					}
				
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				startNode.createFirst(ctx);
				nodesArray.forEach(node=>{
					node.create(ctx);
				})
				connectorArray.splice(-1,1);
				connectorArray.forEach(path=>{
				path.drawConnectorPath(ctx);
				})
			}
		}
		console.log(nodesArray);
	}


	function mouseOver(e){
		//ENTER  CANVAS AREA IN CODE HERE..
	}
	function mouseOut(e){
		//EXIT CANVAS AREA OUT CODE HERE..
	}





	//----- POPUP BUTTON FUNCTIONS -----//

	function smsPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_sms_recipient.value, pop_sms_message.value]));
		console.log(popupArray);
		var modal = btn_sms_ok.closest('.modal');
		modal.style.display = "none";
	}

	function callPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_call_recipient.value,pop_call_message.value]));
		console.log(popupArray);
		var modal = btn_call_ok.closest('.modal');
		modal.style.display = "none";
	}

	function readCSVPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_read_CSV_username.value, pop_read_CSV_message.value]));
		console.log(popupArray);
		var modal = btn_read_CSV_ok.closest('.modal');
		modal.style.display = "none";
	}

	function writeCSVPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_write_CSV_username.value, pop_write_CSV_message.value]));
		console.log(popupArray);
		var modal = btn_write_CSV_ok.closest('.modal');
		modal.style.display = "none";
	}

	function downloadSmallFilesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_download_small_files_username.value, pop_download_small_files_message.value]));
		console.log(popupArray);
		var modal = btn_download_small_files_ok.closest('.modal');
		modal.style.display = "none";
	}

	function downloadLargeFilesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_download_large_files_username.value, pop_download_large_files_message.value]));
		console.log(popupArray);
		var modal = btn_download_large_files_ok.closest('.modal');
		modal.style.display = "none";
	}

	function downloadMultipleFilesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_download_multiple_files_username.value, pop_download_multiple_files_message.value]));
		console.log(popupArray);
		var modal = btn_download_multiple_files_ok.closest('.modal');
		modal.style.display = "none";
	}

	function sendEmailPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_send_email_sender_address.value, pop_send_email_subject.value, pop_send_email_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_send_email_ok.closest('.modal');
		modal.style.display = "none";
	}

	function retrieveEmailPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_retrieve_email_sender_address.value, pop_retrieve_email_subject.value, pop_send_email_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_retrieve_email_ok.closest('.modal');
		modal.style.display = "none";
	}

	function sendHTMLMessagePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_send_HTML_message_sender_address.value, pop_send_HTML_message_subject.value, pop_send_HTML_message_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_send_HTML_message_ok.closest('.modal');
		modal.style.display = "none";
	}

	function sendPlainTextMessagePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_send_plaintext_message_sender_address.value, pop_send_plaintext_message_subject.value, pop_send_plaintext_message_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_send_plaintext_message_ok.closest('.modal');
		modal.style.display = "none";
	}

	function attachExcelPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_attach_excel_sender_address.value, pop_attach_excel_subject.value, pop_attach_excel_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_attach_excel_ok.closest('.modal');
		modal.style.display = "none";
	}

	function attachWordPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_attach_word_sender_address.value, pop_attach_word_subject.value, pop_attach_word_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_attach_word_ok.closest('.modal');
		modal.style.display = "none";
	}

	function attachPPTPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_attach_ppt_sender_address.value, pop_attach_ppt_subject.value, pop_attach_ppt_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_attach_ppt_ok.closest('.modal');
		modal.style.display = "none";
	}

	function attachZipPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_attach_zip_sender_address.value, pop_attach_zip_subject.value, pop_attach_zip_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_attach_zip_ok.closest('.modal');
		modal.style.display = "none";
	}

	function attachAnyOtherFormatPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_attach_any_otherformat_sender_address.value, pop_attach_any_otherformat_subject.value, pop_attach_any_otherformat_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_attach_any_otherformat_ok.closest('.modal');
		modal.style.display = "none";
	}

	function saveAttachmentPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_save_attachment_sender_address.value, pop_save_attachment_subject.value, pop_save_attachment_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_save_attachment_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteAllMessagesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_del_all_messages_sender_address.value, pop_del_all_messages_subject.value, pop_del_all_messages_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_del_all_messages_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteReadMessagesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_del_read_messages_sender_address.value, pop_del_read_messages_subject.value, pop_del_read_messages_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_del_read_messages_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteUnreadMessagesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_del_unread_messages_sender_address.value, pop_del_unread_messages_subject.value, pop_del_unread_messages_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_del_unread_messages_ok.closest('.modal');
		modal.style.display = "none";
	}

	function beginErrorHandlingPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_begin_error_handling_sender_address.value, pop_begin_error_handling_subject.value, pop_begin_error_handling_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_begin_error_handling_ok.closest('.modal');
		modal.style.display = "none";
	}

	function endErrorHandlingPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_end_error_handling_sender_address.value, pop_end_error_handling_subject.value, pop_end_error_handling_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_end_error_handling_ok.closest('.modal');
		modal.style.display = "none";
	}

	function continueErrorHandlingPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_continue_error_handling_sender_address.value, pop_eh_send_email_subject.value, pop_eh_send_email_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_continue_error_handling_ok.closest('.modal');
		modal.style.display = "none";
	}

	function sendErrorEmailPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_eh_send_email_sender_address.value, pop_continue_error_handling_subject.value, pop_continue_error_handling_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_eh_send_email_ok.closest('.modal');
		modal.style.display = "none";
	}

	function takeSnapshotPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_take_snapshot_sender_address.value, pop_take_snapshot_subject.value, pop_take_snapshot_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_eh_send_email_ok.closest('.modal');
		modal.style.display = "none";
	}

	function logDataIntoFilePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_log_data_into_file_sender_address.value, pop_log_data_into_file_subject.value, pop_log_data_into_file_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_log_data_into_file_ok.closest('.modal');
		modal.style.display = "none";
	}

	function stopTaskPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_stop_task_sender_address.value, pop_stop_task_subject.value, pop_stop_task_mail_body.value]));
		console.log(popupArray);
		var modal = btn_pop_stop_task_ok.closest('.modal');
		modal.style.display = "none";
	}

	function createExcelPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname, [pop_create_excel_name.value, pop_create_excel_path.value]));
		console.log(popupArray);
		var modal = btn_pop_create_excel_ok.closest('.modal');
		modal.style.display = "none";
	}

	function openExcelPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname,[pop_open_excel_name.value, pop_open_excel_path.value]));
		console.log(popupArray);
		var modal = btn_pop_open_excel_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteExcelPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname,[pop_delete_excel_path.value]));
		console.log(popupArray);
		var modal = btn_pop_delete_excel_ok.closest('.modal');
		modal.style.display = "none";
	}

	function renameExcelPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_rename_excel_current_path.value, pop_rename_excel_new_path.value, pop_rename_excel_name.value]));
		console.log(popupArray);
		var modal = btn_pop_rename_excel_ok.closest('.modal');
		modal.style.display = "none";
	}

	function copyExcelPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_copy_excel_source_path.value, pop_copy_excel_destination_path.value, pop_copy_excel_name.value]));
		console.log(popupArray);
		var modal = btn_pop_copy_excel_ok.closest('.modal');
		modal.style.display = "none";
	}

	function moveExcelPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_move_excel_source_path.value, pop_move_excel_destination_path.value, pop_move_excel_name.value]));
		console.log(popupArray);
		var modal = btn_pop_move_excel_ok.closest('.modal');
		modal.style.display = "none";
	}

	function searchValuePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_search_value_source_path.value, pop_search_value_destination_path.value, pop_search_value_name.value]));
		console.log(popupArray);
		var modal = btn_pop_search_value_ok.closest('.modal');
		modal.style.display = "none";
	}

	function copyDataExcelPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_copy_data_excel_source_path.value, pop_copy_data_excel_destination_path.value, pop_copy_data_excel_name.value]));
		console.log(popupArray);
		var modal = btn_pop_copy_data_excel_ok.closest('.modal');
		modal.style.display = "none";
	}

	function createSheetPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_create_sheet_source_path.value, pop_create_sheet_destination_path.value, pop_create_sheet_name.value]));
		console.log(popupArray);
		var modal = btn_pop_create_sheet_ok.closest('.modal');
		modal.style.display = "none";
	}

	function selectSheetPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_sel_sheet_source_path.value, pop_sel_sheet_destination_path.value, pop_sel_sheet_name.value]));
		console.log(popupArray);
		var modal = btn_pop_sel_sheet_ok.closest('.modal');
		modal.style.display = "none";
	}

	function renameSheetPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_rename_sheet_source_path.value, pop_rename_sheet_destination_path.value, pop_rename_sheet_name.value]));
		console.log(popupArray);
		var modal = btn_pop_rename_sheet_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteSheetPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_del_sheet_name.value]));
		console.log(popupArray);
		var modal = btn_pop_del_sheet_ok.closest('.modal');
		modal.style.display = "none";
	}

	function copyDataSheetPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_copy_data_sheet_source_path.value, pop_copy_data_sheet_destination_path.value, pop_copy_data_sheet_name.value]));
		console.log(popupArray);
		var modal = btn_pop_copy_data_sheet_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteColumnPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_del_column_name.value]));
		console.log(popupArray);
		var modal = btn_pop_del_column_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteRowPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_del_row_name.value]));
		console.log(popupArray);
		var modal = btn_pop_del_row_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteAllRowsColumnsPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_del_row_column_name.value]));
		console.log(popupArray);
		var modal = btn_pop_del_row_column_ok.closest('.modal');
		modal.style.display = "none";
	}

	function vlookupSameExcelPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_vlookup_searched_same_value.value, pop_vlookup_searched_same_range.value, pop_vlookup_same_index_value.value]));
		console.log(popupArray);
		var modal = btn_pop_vlookup_same_ok.closest('.modal');
		modal.style.display = "none";
	}

	function vlookupTwoExcelPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_vlookup_two_cell_range.value, pop_vlookup_two_value.value, pop_vlookup_two_index_value.value]));
		console.log(popupArray);
		var modal = btn_pop_vlookup_two_ok.closest('.modal');
		modal.style.display = "none";
	}

	function formulaPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_formula_enter_value.value, pop_formula_cell_range.value]));
		console.log(popupArray);
		var modal = btn_pop_formula_ok.closest('.modal');
		modal.style.display = "none";
	}

	function filterPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_filter_enter_value.value, pop_filter_column_number.value]));
		console.log(popupArray);
		var modal = btn_pop_filter_ok.closest('.modal');
		modal.style.display = "none";
	}

	function removeDuplicatesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_remove_duplicates_column_number.value]));
		console.log(popupArray);
		var modal = btn_pop_remove_duplicates_ok.closest('.modal');
		modal.style.display = "none";
	}

	function maxColumnPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_max_column_sheet_name.value]));
		console.log(popupArray);
		var modal = btn_pop_max_column_ok.closest('.modal');
		modal.style.display = "none";
	}

	function maxRowsPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_max_row_sheet_name.value]));
		console.log(popupArray);
		var modal = btn_pop_max_row_ok.closest('.modal');
		modal.style.display = "none";
	}

	function roundOffColumnPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_roundoff_column_number.value, pop_roundoff_decimal_place.value]));
		console.log(popupArray);
		var modal = btn_pop_roundoff_decimal_ok.closest('.modal');
		modal.style.display = "none";
	}

	function passwordPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_password_enter_keyword.value, pop_password_enter_password.value]));
		console.log(popupArray);
		var modal = btn_pop_password_ok.closest('.modal');
		modal.style.display = "none";
	}

	function sumIfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_sum_if_start_cell.value, pop_sum_if_end_cell.value, pop_sum_if_output_cell.value]));
		console.log(popupArray);
		var modal = btn_pop_sum_if_ok.closest('.modal');
		modal.style.display = "none";
	}

	function pivotTablePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_pivot_table_column_value.value, pop_pivot_table_column_index.value]));
		console.log(popupArray);
		var modal = pop_btn_pivot_table_ok.closest('.modal');
		modal.style.display = "none";
	}

	function pasteSpecialPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_paste_special_sheet_number.value]));
		console.log(popupArray);
		var modal = btn_pop_paste_special_ok.closest('.modal');
		modal.style.display = "none";
	}

	function changeHeaderPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_change_header_excel_path.value, pop_change_header_old_name.value, pop_change_header_new_name.value]));
		console.log(popupArray);
		var modal = btn_pop_change_header_ok.closest('.modal');
		modal.style.display = "none";
	}

	function colDataTypePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_col_datatype_column_name.value, pop_col_datatype_data_type.value]));
		console.log(popupArray);
		var modal = btn_pop_col_datatype_ok.closest('.modal');
		modal.style.display = "none";
	}

	function excelToCSVPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_excel_to_csv_excel_path.value, pop_excel_to_csv_CSV_path.value, pop_excel_to_csv_CSV_name.value]));
		console.log(popupArray);
		var modal = btn_pop_excel_to_csv_ok.closest('.modal');
		modal.style.display = "none";
	}

	function readCellDataPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_read_cell_data_range.value]));
		console.log(popupArray);
		var modal = btn_pop_read_cell_data_ok.closest('.modal');
		modal.style.display = "none";
	}

	function changeFolderFTPPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_change_folder_ftp_server_address.value,
		pop_change_folder_ftp_username.value, pop_change_folder_ftp_password.value, pop_change_folder_ftp_folder_path.value]));
		console.log(popupArray);
		var modal = btn_pop_change_folder_ftp_ok.closest('.modal');
		modal.style.display = "none";
	}

	function createFolderFTPPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_create_folder_ftp_server_address.value,
		pop_create_folder_ftp_username.value, pop_create_folder_ftp_password.value, pop_create_folder_ftp_server_path.value, pop_create_folder_ftp_name.value]));
		console.log(popupArray);
		var modal = btn_pop_create_folder_ftp_ok.closest('.modal');
		modal.style.display = "none";
	}

    function delFolderPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_del_folder_enter_path.value]));
		console.log(popupArray);
		var modal = btn_pop_del_folder_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteFileFTPPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_file_delete_ftp_server_address.value,
		pop_file_delete_ftp_username.value, pop_file_delete_ftp_password.value, pop_file_delete_ftp_file_path.value, pop_file_delete_ftp_file_name.value]));
		console.log(popupArray);
		var modal = btn_pop_file_delete_ftp_ok.closest('.modal');
		modal.style.display = "none";
	}

	function downloadFileFTPPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_file_download_ftp_server_address.value,
		pop_file_download_ftp_username.value, pop_file_download_ftp_password.value, pop_file_download_ftp_file_path.value, pop_file_download_ftp_local_path.value]));
		console.log(popupArray);
		var modal = btn_pop_file_download_ftp_ok.closest('.modal');
		modal.style.display = "none";
	}

	function renameFileFTPPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_file_rename_ftp_server_address.value,
		pop_file_rename_ftp_username.value, pop_file_rename_ftp_password.value, pop_file_rename_ftp_file_path.value, pop_file_rename_ftp_file_name.value,
		pop_file_rename_ftp_new_file.value]));
		console.log(popupArray);
		var modal = btn_pop_file_rename_ftp_ok.closest('.modal');
		modal.style.display = "none";
	}

	function uploadFileFTPPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_file_upload_ftp_server_address.value,
		pop_file_upload_ftp_username.value, pop_file_upload_ftp_password.value, pop_file_upload_ftp_file_path.value, pop_file_upload_ftp_server_path.value]));
		console.log(popupArray);
		var modal = btn_pop_file_upload_ftp_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteFolderFTPPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_folder_delete_ftp_server_address.value,
		pop_folder_delete_ftp_username.value, pop_folder_delete_ftp_password.value, pop_folder_delete_ftp_folder_path.value, pop_folder_delete_ftp_folder_name.value]));
		console.log(popupArray);
		var modal = btn_pop_folder_delete_ftp_ok.closest('.modal');
		modal.style.display = "none";
	}

	function uploadFolderFTPPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_folder_upload_ftp_server_address.value,
		pop_folder_upload_ftp_username.value, pop_folder_upload_ftp_password.value, pop_folder_upload_ftp_path.value, pop_folder_upload_ftp_server_path.value]));
		console.log(popupArray);
		var modal = btn_pop_folder_upload_ftp_ok.closest('.modal');
		modal.style.display = "none";
	}

	function ftpConnectPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_ftp_connect_server_address.value, pop_ftp_connect_server_username.value,
		pop_ftp_connect_server_password.value]));
		console.log(popupArray);
		var modal = btn_pop_ftp_connect_ok.closest('.modal');
		modal.style.display = "none";
	}

	function ftpDisconnectPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_ftp_disconnect_server_address.value, pop_ftp_disconnect_username.value,
		pop_ftp_disconnect_password.value]));
		console.log(popupArray);
		var modal = btn_pop_ftp_disconnect_ok.closest('.modal');
		modal.style.display = "none";
	}

	function secureFTPConnectionPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_secure_ftp_connection_server_address.value, pop_secure_ftp_connection_username.value,
		pop_secure_ftp_connection_password.value]));
		console.log(popupArray);
		var modal = btn_pop_secure_ftp_connection_ok.closest('.modal');
		modal.style.display = "none";
	}

	function ftpServerConnectionPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[btn_pop_ftp_server_connection_server_address.value]));
		console.log(popupArray);
		var modal = btn_pop_ftp_server_connection_ok.closest('.modal');
		modal.style.display = "none";
	}

	function listFTPServerDirectoryPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_list_ftp_direct_server_address.value, pop_list_ftp_direct_username.value,
		pop_list_ftp_direct_password.value]));
		console.log(popupArray);
		var modal = btn_pop_list_ftp_direct_ok.closest('.modal');
		modal.style.display = "none";
	}

	function changeDirectoryPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_change_directory_IP_address.value, pop_change_directory_port_number.value,
		pop_change_directory_username.value, pop_change_directory_password.value, pop_change_directory_enter_name.value]));
		console.log(popupArray);
		var modal = btn_pop_change_directory_ok.closest('.modal');
		modal.style.display = "none";
	}

	function downloadSingleFTPFilePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_download_single_ftp_file_IP_address.value, pop_download_single_ftp_file_port_number.value,
		pop_download_single_ftp_file_username.value, pop_download_single_ftp_file_password.value, pop_download_single_ftp_file_directory.value,
		pop_download_single_ftp_file_document.value, pop_download_single_ftp_file_download_path.value]));
		console.log(popupArray);
		var modal = btn_pop_download_single_ftp_file_ok.closest('.modal');
		modal.style.display = "none";
	}

	function downloadMultipleFTPFilePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_download_multiple_files_ftp_IP_address.value, pop_download_multiple_files_ftp_port_number.value,
		pop_download_multiple_files_ftp_username.value, pop_download_multiple_files_ftp_password.value, pop_download_multiple_files_ftp_directory.value,
		pop_download_multiple_files_ftp_path.value]));
		console.log(popupArray);
		var modal = btn_pop_download_multiple_files_ftp_ok.closest('.modal');
		modal.style.display = "none";
	}

    function downloadSingleFTPFolderPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_download_single_folder_ftp_IP_address.value, pop_download_single_folder_ftp_port_number.value,
		pop_download_single_folder_ftp_username.value, pop_download_single_folder_ftp_password.value, pop_download_single_folder_ftp_directory.value,
		pop_download_single_folder_ftp_path.value]));
		console.log(popupArray);
		var modal = btn_pop_download_single_folder_ftp_ok.closest('.modal');
		modal.style.display = "none";
	}

    function downloadMultipleFTPFoldersPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_download_multiple_ftp_folders_IP_address.value, pop_download_multiple_ftp_folders_port_number.value,
		pop_download_multiple_ftp_folders_username.value, pop_download_multiple_ftp_folders_password.value, pop_download_multiple_ftp_folders_directory.value,
		pop_download_multiple_ftp_folders_path.value]));
		console.log(popupArray);
		var modal = btn_pop_download_multiple_ftp_folders_ok.closest('.modal');
		modal.style.display = "none";
	}

    function uploadSingleFTPFilePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_upload_single_ftp_file_IP_address.value, pop_upload_single_ftp_file_port_number.value,
		pop_upload_single_ftp_file_username.value, pop_upload_single_ftp_file_password.value, pop_upload_single_ftp_file_directory.value,
		pop_upload_single_ftp_file_path.value]));
		console.log(popupArray);
		var modal = btn_pop_upload_single_ftp_file_ok.closest('.modal');
		modal.style.display = "none";
	}

    function uploadMultipleFTPFilesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_upload_multiple_ftp_files_IP_address.value, pop_upload_multiple_ftp_files_port_number.value,
		pop_upload_multiple_ftp_files_username.value, pop_upload_multiple_ftp_files_password.value, pop_upload_multiple_ftp_files_directory.value,
		pop_upload_multiple_ftp_files_path.value]));
		console.log(popupArray);
		var modal = btn_pop_upload_multiple_ftp_files_ok.closest('.modal');
		modal.style.display = "none";
	}

	function uploadSingleFTPFolderPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_upload_single_ftp_folder_IP_address.value, pop_upload_single_ftp_folder_port_number.value,
		pop_upload_single_ftp_folder_username.value, pop_upload_single_ftp_folder_password.value, pop_upload_single_ftp_folder_directory.value,
		pop_upload_single_ftp_folder_path.value]));
		console.log(popupArray);
		var modal = btn_pop_upload_single_ftp_folder_ok.closest('.modal');
		modal.style.display = "none";
	}

	function uploadMultipleFTPFoldersPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_upload_multiple_ftp_folders_IP_address.value, pop_upload_multiple_ftp_folders_port.value,
		pop_upload_multiple_ftp_folders_username.value, pop_upload_multiple_ftp_folders_password.value, pop_upload_multiple_ftp_folders_directory.value,
		pop_upload_multiple_ftp_folders_path.value]));
		console.log(popupArray);
		var modal = btn_pop_upload_multiple_ftp_folders_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteFTPFilesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_delete_ftp_files_IP_address.value, pop_delete_ftp_files_port.value,
		pop_delete_ftp_files_username.value, pop_delete_ftp_files_password.value, pop_delete_ftp_files_path.value]));
		console.log(popupArray);
		var modal = btn_pop_delete_ftp_files_ok.closest('.modal');
		modal.style.display = "none";
	}

	function renameFTPFilesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_rename_ftp_file_IP_address.value, pop_rename_ftp_file_port_number.value,
		pop_rename_ftp_file_username.value, pop_rename_ftp_file_password.value, pop_rename_ftp_file_old_directory.value, pop_rename_ftp_file_directory.value]));
		console.log(popupArray);
		var modal = btn_pop_rename_ftp_file_ok.closest('.modal');
		modal.style.display = "none";
	}

	function createFTPDirectoryPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_create_ftp_directory_IP_address.value, pop_create_ftp_directory_port_number.value,
		pop_create_ftp_directory_username.value, pop_create_ftp_directory_password.value, pop_create_ftp_directory_name.value]));
		console.log(popupArray);
		var modal = btn_pop_create_ftp_directory_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteFTPDirectoryPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_delete_ftp_directory_IP_address.value, pop_delete_ftp_directory_port_number.value,
		pop_delete_ftp_directory_username.value, pop_delete_ftp_directory_password.value, pop_delete_ftp_directory_name.value]));
		console.log(popupArray);
		var modal = btn_pop_delete_ftp_directory_ok.closest('.modal');
		modal.style.display = "none";
	}

	function invokeFTPCommandPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_invoke_ftp_IP_address.value, pop_invoke_ftp_port_number.value,
		pop_invoke_ftp_username.value, pop_invoke_ftp_password.value, pop_invoke_ftp_input_command.value]));
		console.log(popupArray);
		var modal = btn_pop_invoke_ftp_ok.closest('.modal');
		modal.style.display = "none";
	}

	function createNewFilePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_create_new_file_extension.value]));
		console.log(popupArray);
		var modal = btn_pop_create_new_file_ok.closest('.modal');
		modal.style.display = "none";
	}

	function copyFilesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_copy_files_source_path.value, pop_copy_files_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_copy_files_ok.closest('.modal');
		modal.style.display = "none";
	}

	function moveFilesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_move_files_source_path.value, pop_move_files_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_move_files_ok.closest('.modal');
		modal.style.display = "none";
	}

	function renameFilesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_rename_files_source_path.value, pop_rename_files_old_name.value,
		pop_rename_files_new_name.value]));
		console.log(popupArray);
		var modal = btn_pop_rename_files_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteFilePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_delete_file_source_path.value]));
		console.log(popupArray);
		var modal = btn_pop_delete_file_ok.closest('.modal');
		modal.style.display = "none";
	}

	function deleteTemporaryFilesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_delete_temporary_files_source_path.value]));
		console.log(popupArray);
		var modal = btn_pop_delete_temporary_files_ok.closest('.modal');
		modal.style.display = "none";
	}

	function createFilesShortcutPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_create_file_shortcut_select_file.value]));
		console.log(popupArray);
		var modal = btn_pop_create_file_shortcut_ok.closest('.modal');
		modal.style.display = "none";
	}

	function getFilesPartPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_get_file_part_select_file.value]));
		console.log(popupArray);
		var modal = btn_pop_get_file_part_ok.closest('.modal');
		modal.style.display = "none";
	}

	function printFilePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_print_file_source_path.value]));
		console.log(popupArray);
		var modal = btn_pop_print_file_ok.closest('.modal');
		modal.style.display = "none";
	}

	function printMultipleFilesPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_print_files_source_path.value]));
		console.log(popupArray);
		var modal = btn_pop_print_files_ok.closest('.modal');
		modal.style.display = "none";
	}

	function openFolderPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_open_folder_path.value]));
		console.log(popupArray);
		var modal = btn_pop_open_folder_ok.closest('.modal');
		modal.style.display = "none";
	}

	function createFolderPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_create_folder_path.value, pop_create_folder_name.value]));
		console.log(popupArray);
		var modal = btn_pop_create_folder_ok.closest('.modal');
		modal.style.display = "none";
	}

	function copyFolderPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_copy_folder_source_path.value, pop_copy_folder_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_copy_folder_ok.closest('.modal');
		modal.style.display = "none";
	}

	function moveFolderPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_move_folder_current_path.value, pop_move_folder_new_path.value]));
		console.log(popupArray);
		var modal = btn_pop_move_folder_ok.closest('.modal');
		modal.style.display = "none";
	}

	function createShortcutPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname ,[pop_create_shortcut_path.value, pop_create_shortcut_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_create_shortcut_ok.closest('.modal');
		modal.style.display = "none";
	}

	function extractImagePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_extract_image_url.value]));
		console.log(pop_extract_image_url.value);
		// OPTIIC HERE...
		var modal = btn_extract_image_ok.closest('.modal');
		modal.style.display = "none";
		var popup = document.querySelector("#modalOne_extract_image_response");
 		popup.style.display = "block"; popup.style.overflow = "auto";
		// import 
		optiic_extract(extract_image_response_text,pop_extract_image_url.value)
		// extract_image_response_text.textContent = marks
	}

	function extractImageResponsePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [extract_image_response_text.textContent]));
		console.log('2432432',extract_image_response_text.textContent);
		var modal = btn_extract_image_response_save.closest('.modal');
		modal.style.display = "none";
	}

	function createPdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId,popupname, [pop_create_pdf_path.value, pop_create_pdf_name.value, pop_create_pdf_text.value]));
		console.log(popupArray);
		var modal = btn_pop_create_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function splitPdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_split_pdf_select_pdf.value, pop_split_pdf_select_destination.value]));
		console.log(popupArray);
		var modal = btn_split_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function concatenatePdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_concatenate_pdf_select_first.value,
		pop_concatenate_pdf_select_second.value, pop_concatenate_pdf_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_concatenate_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function insertNewPagePdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_insert_newpage_pdf_source_path.value,
		pop_insert_newpage_pdf_page_index.value, pop_insert_newpage_pdf_text.value, pop_insert_newpage_pdf_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_insert_newpage_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function insertExistingPagePdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_insert_existingpage_pdf_source_path.value,
		pop_insert_existingpage_pdf_existing_page.value, pop_insert_existingpage_pdf_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_insert_existingpage_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function encryptPdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_encrypt_pdf_source_path.value,
		pop_encrypt_pdf_destination_path.value, pop_encrypt_pdf_password.value]));
		console.log(popupArray);
		var modal = pop_encrypt_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function decryptPdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_decrypt_pdf_source_path.value,
		pop_decrypt_pdf_destination_path.value, pop_decrypt_pdf_password.value]));
		console.log(popupArray);
		var modal = btn_pop_decrypt_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function extractImagePdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_extract_image_pdf_source_path.value,
		pop_extract_image_pdf_image_path.value]));
		console.log(popupArray);
		var modal = btn_pop_extract_image_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function extractTextPdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_extract_image_pdf_source_path.value,
		pop_extract_image_pdf_image_path.value]));
		console.log(popupArray);
		var modal = btn_pop_extract_image_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function extractTextPdfOCRPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_extract_text_ocr_pdf_source_path.value,
		pop_extract_text_ocr_pdf_file_path.value]));
		console.log(popupArray);
		var modal = btn_pop_extract_text_ocr_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function extractPagePdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_extract_page_pdf_start_page.value,
		pop_extract_page_pdf_end_page.value]));
		console.log(popupArray);
		var modal = btn_pop_extract_page_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function anyFileToPdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_any_to_pdf_file_path.value,
		pop_any_to_pdf_pdf_path.value]));
		console.log(popupArray);
		var modal = btn_pop_any_to_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function wordToPdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_word_to_pdf_source_path.value,
		pop_word_to_pdf_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_word_to_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function excelToPdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_excel_to_pdf_source_path.value,
		pop_excel_to_pdf_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_excel_to_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function gifToPdfPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_gif_to_pdf_source_path.value,
		pop_gif_to_pdf_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_gif_to_pdf_ok.closest('.modal');
		modal.style.display = "none";
	}

	function pdfToWordPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_pdf_to_word_source_path.value,
		pop_pdf_to_word_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_pdf_to_word_ok.closest('.modal');
		modal.style.display = "none";
	}

	function pdfToExcelPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_pdf_to_excel_source_path.value,
		pop_pdf_to_excel_destination_path.value]));
		console.log(popupArray);
		var modal = btn_pop_pdf_to_excel_ok.closest('.modal');
		modal.style.display = "none";
	}


	function recordWebRecordPopup(){
		// popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_record_web_record.value]));
		// console.log(popupArray);
		var modal_record = btn_record_web_record.closest('.modal');
		// log.console("red")
		// modal_record.style.backgroundColor = "red";
	}

	function recordWebStopPopup(){
		// popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_record_web_stop.value]));
		// console.log(popupArray);
		var modal_stop = btn_record_web_stop.closest('.modal');
		// log.console("stop")
		btn_record_web_record.style.background = "#20204b";
	
	}
	
	function curebayWebautomationPopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_curebay_webautomation_id.value]));
		console.log(popupArray);
		var modal = btn_curebay_webautomation_ok.closest('.modal');
		modal.style.display = "none";
	}

    function extractDataWebpagePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_extract_data_from_webpage_url.value,
		pop_extract_data_from_webpage_output_location.value]));
		console.log(popupArray);
		var modal = btn_pop_extract_data_from_webpage_ok.closest('.modal');
		modal.style.display = "none";
	}

	function takeScreenshotWebpagePopup(){
		popupArray.push(new Popup(popupInputId, popupOutputId, popupname, [pop_take_screenshot_of_webpage_url.value,
		pop_take_screenshot_of_webpage_output_location.value]));
		console.log(popupArray);
		var modal = btn_pop_take_screenshot_of_webpage_ok.closest('.modal');
		modal.style.display = "none";
	}









	// function sortArray(){
	// 	for (var i = 0; i < connectorArray.length; i++) {
	// 		if (connectorArray[i].outputNodeId == "startNode") {
	// 			connectorSequenceArray.push(connectorArray[i]);
	// 		}
	// 	}

	// 	for (var i = 0; i < connectorArray.length; i++) {
	// 		if (connectorArray[i].outputNodeId == i) {
	// 			connectorSequenceArray.push(connectorArray[i]);
	// 		}
	// 	}
	// 	return connectorSequenceArray
	// }


//--------------CLASSES AND METHODS*----------------------------------------------------

	
	// CONNECT NODE CREATE CLICK HERE WITH FUNCTION OR CLICK ON HTML ELEMENT OR WHATEVER..
	startNode = new Node(80, 70, 100, 70, false, false, false, undefined, undefined, "", "startNode", undefined);
	startNode.createFirst(ctx);

	window.addEventListener("resize", resizeCanvas, false);
	canvas.addEventListener("mousedown", mouseDown, false);
	canvas.addEventListener("mouseup", mouseUp, false);
	canvas.addEventListener("mousemove", mouseMove, false);
	canvas.addEventListener("mouseover", mouseOver, false);
	canvas.addEventListener("mouseout", mouseOut, false);
	excelMenu.addEventListener("click", nodesMenuClick, false);
	csvMenu.addEventListener("click", nodesMenuClick, false);
	dwa_menu.addEventListener("click", nodesMenuClick, false);
	email_menu.addEventListener("click", nodesMenuClick, false);
	phone.addEventListener("click", nodesMenuClick, false);
	web_automation.addEventListener("click", nodesMenuClick, false);
	files_menu.addEventListener("click", nodesMenuClick, false);
	folder_menu.addEventListener("click", nodesMenuClick, false);
	ftp_menu.addEventListener("click", nodesMenuClick, false);
	pdf_menu.addEventListener("click", nodesMenuClick, false);
	wde_menu.addEventListener("click", nodesMenuClick, false);
	error_handle_menu.addEventListener("click", nodesMenuClick, false);
	ocr.addEventListener("click", nodesMenuClick, false);

	clr_nodes.addEventListener("click", clearNodes, false);
	undo_node.addEventListener("click", undoNodes, false);
	redo_node.addEventListener("click", redoNodes, false);
	button_save_task.addEventListener("click", buttonSaveTask, false);
	create_task_button.addEventListener("click", create_task_func, false);
	run_task_button.addEventListener("click", run_task_func, false);


	//----- Popups Button Events  -------//
	// SMS
	btn_sms_ok.addEventListener("click", smsPopup, false);

	// Call
	btn_call_ok.addEventListener("click", callPopup, false);

	// read from CSV
	btn_read_CSV_ok.addEventListener("click", readCSVPopup, false);

	// write to CSV
	btn_write_CSV_ok.addEventListener("click", writeCSVPopup, false);

	// download small files from web
	btn_download_small_files_ok.addEventListener("click", downloadSmallFilesPopup, false);

	// download large files from web
	btn_download_large_files_ok.addEventListener("click", downloadLargeFilesPopup, false);

	// download multiple files from web
	btn_download_multiple_files_ok.addEventListener("click", downloadMultipleFilesPopup, false);

	// Send_Email
	btn_pop_send_email_ok.addEventListener("click", sendEmailPopup, false);

	// Retrieve_Email
	btn_pop_retrieve_email_ok.addEventListener("click", retrieveEmailPopup, false);

	// Send_HTML_Message
	btn_pop_send_HTML_message_ok.addEventListener("click", sendHTMLMessagePopup, false);

	// Send_Plaintext_Message
	btn_pop_send_plaintext_message_ok.addEventListener("click", sendPlainTextMessagePopup, false);

	// Attach Excel
	btn_pop_attach_excel_ok.addEventListener("click", attachExcelPopup, false);

	// Attach Word
	btn_pop_attach_word_ok.addEventListener("click", attachWordPopup, false);

	// Attach PPT
	btn_pop_attach_ppt_ok.addEventListener("click", attachPPTPopup, false);

	// Attach Zip
	btn_pop_attach_zip_ok.addEventListener("click", attachZipPopup, false);

	// Attach Any Other Format
	btn_pop_attach_any_otherformat_ok.addEventListener("click", attachAnyOtherFormatPopup, false);

	// Save Attachment
	btn_pop_save_attachment_ok.addEventListener("click", saveAttachmentPopup, false);

	// Delete All Messages
	btn_pop_del_all_messages_ok.addEventListener("click", deleteAllMessagesPopup, false);

	// Delete Read Messages
	btn_pop_del_read_messages_ok.addEventListener("click", deleteReadMessagesPopup, false);

	// Delete Unread Messages
	btn_pop_del_unread_messages_ok.addEventListener("click", deleteUnreadMessagesPopup, false);

	// Begin Error Handling
	btn_pop_begin_error_handling_ok.addEventListener("click", beginErrorHandlingPopup, false);

	// End Error Handling
	btn_pop_end_error_handling_ok.addEventListener("click", endErrorHandlingPopup, false);

	// Continue Error Handling
	btn_pop_continue_error_handling_ok.addEventListener("click", continueErrorHandlingPopup, false);

    // Send Error Email
	btn_pop_eh_send_email_ok.addEventListener("click", sendErrorEmailPopup, false);

    // Take Snapshot
	btn_pop_take_snapshot_ok.addEventListener("click", takeSnapshotPopup, false);

	// Log Data into file
	btn_pop_log_data_into_file_ok.addEventListener("click", logDataIntoFilePopup, false);

	// Stop Task
	btn_pop_stop_task_ok.addEventListener("click", stopTaskPopup, false);

	// Create Excel
	btn_pop_create_excel_ok.addEventListener("click", createExcelPopup, false);

	// Open Excel
	btn_pop_open_excel_ok.addEventListener("click", openExcelPopup, false);

	// Delete Excel
	btn_pop_delete_excel_ok.addEventListener("click", deleteExcelPopup, false);

	// Rename Excel
	btn_pop_rename_excel_ok.addEventListener("click", renameExcelPopup, false);

	// Copy Excel
	btn_pop_copy_excel_ok.addEventListener("click", copyExcelPopup, false);

	// Move Excel
	btn_pop_move_excel_ok.addEventListener("click", moveExcelPopup, false);

	// Search Excel
	btn_pop_search_value_ok.addEventListener("click", searchValuePopup, false);

	// Copy Data from one Excel to Another
	btn_pop_copy_data_excel_ok.addEventListener("click", copyDataExcelPopup, false);

	// Create Excel
	btn_pop_create_sheet_ok.addEventListener("click", createSheetPopup, false);

	// Select Sheet
	btn_pop_sel_sheet_ok.addEventListener("click", selectSheetPopup, false);

	// Rename Sheet
	btn_pop_rename_sheet_ok.addEventListener("click", renameSheetPopup, false);

	// Copy Data from one Sheet to Another
	btn_pop_copy_data_sheet_ok.addEventListener("click", copyDataSheetPopup, false);

	// Delete Sheet
	btn_pop_del_sheet_ok.addEventListener("click", deleteSheetPopup, false);

	// Delete Column
	btn_pop_del_column_ok.addEventListener("click", deleteColumnPopup, false);

    // Delete Row
	btn_pop_del_row_ok.addEventListener("click", deleteRowPopup, false);

    // Delete All Rows & Columns
    btn_pop_del_row_column_ok.addEventListener("click", deleteAllRowsColumnsPopup, false);

    // Vlookup on same excel
    btn_pop_vlookup_same_ok.addEventListener("click", vlookupSameExcelPopup, false);

    // Vlookup on two excel
    btn_pop_vlookup_two_ok.addEventListener("click", vlookupTwoExcelPopup, false);

    // Formula
    btn_pop_formula_ok.addEventListener("click", formulaPopup, false);

    // Filter
    btn_pop_filter_ok.addEventListener("click", filterPopup, false);

    // Remove duplicates
    btn_pop_remove_duplicates_ok.addEventListener("click", removeDuplicatesPopup, false);

    // Max Column
    btn_pop_max_column_ok.addEventListener("click", maxColumnPopup, false);

    // Max Rows
    btn_pop_max_row_ok.addEventListener("click", maxRowsPopup, false);

    // Roundoff Column
    btn_pop_roundoff_decimal_ok.addEventListener("click", roundOffColumnPopup, false);

    // Password
    btn_pop_password_ok.addEventListener("click", passwordPopup, false);

    // Sum if
    btn_pop_sum_if_ok.addEventListener("click", sumIfPopup, false);

    // Pivot Table
    btn_pop_pivot_table_ok.addEventListener("click", pivotTablePopup, false);

    // Paste Special
    btn_pop_paste_special_ok.addEventListener("click", pasteSpecialPopup, false);

    // Change Header
    btn_pop_change_header_ok.addEventListener("click", changeHeaderPopup, false);

    // Change Datatype of column
    btn_pop_col_datatype_ok.addEventListener("click", colDataTypePopup, false);

    // Excel to CSV
    btn_pop_excel_to_csv_ok.addEventListener("click", excelToCSVPopup, false);

     // Read Cell Data
    btn_pop_read_cell_data_ok.addEventListener("click", readCellDataPopup, false);

    // Change folder on FTP server
    btn_pop_change_folder_ftp_ok.addEventListener("click", changeFolderFTPPopup, false);

    // Create folder on FTP server
    btn_pop_create_folder_ftp_ok.addEventListener("click", createFolderFTPPopup, false);

    // Delete folder
    btn_pop_del_folder_ok.addEventListener("click", delFolderPopup, false);

    // Delete file on FTP server
    btn_pop_file_delete_ftp_ok.addEventListener("click", deleteFileFTPopup, false);

    // Download file from FTP server
    btn_pop_file_download_ftp_ok.addEventListener("click", downloadFileFTPopup, false);

    // File rename on FTP server
    btn_pop_file_rename_ftp_ok.addEventListener("click", renameFileFTPopup, false);

    // File upload on FTP server
    btn_pop_file_upload_ftp_ok.addEventListener("click", uploadFileFTPopup, false);

     // Delete folder on FTP server
    btn_pop_folder_delete_ftp_ok.addEventListener("click", deleteFolderFTPopup, false);

    // Folder upload on FTP server
    btn_pop_folder_upload_ftp_ok.addEventListener("click", uploadFolderFTPopup, false);

    // FTP Connect
    btn_pop_ftp_connect_ok.addEventListener("click", ftpConnectPopup, false);

    // FTP Disconnect
    btn_pop_ftp_disconnect_ok.addEventListener("click", ftpDisconnectPopup, false);

    // FTP Disconnect
    btn_pop_secure_ftp_connection_ok.addEventListener("click", secureFTPConnectionPopup, false);

    // FTP server connection
    btn_pop_ftp_server_connection_ok.addEventListener("click", ftpServerConnectionPopup, false);

    // list FTP server directory
    btn_pop_list_ftp_direct_ok.addEventListener("click", listFTPServerDirectoryPopup, false);

    // change directory
    btn_pop_change_directory_ok.addEventListener("click", changeDirectoryPopup, false);

    // download single file from FTP
    btn_pop_download_single_ftp_file_ok.addEventListener("click", downloadSingleFTPFilePopup, false);

    // download multiple file from FTP
    btn_pop_download_multiple_files_ftp_ok.addEventListener("click", downloadMultipleFTPFilePopup, false);

    // download single folder from FTP
    btn_pop_download_single_folder_ftp_ok.addEventListener("click", downloadSingleFTPFolderPopup, false);

    // download multiple folders from FTP
    btn_pop_download_multiple_ftp_folders_ok.addEventListener("click", downloadMultipleFTPFoldersPopup, false);

    // upload single file from FTP
    btn_pop_upload_single_ftp_file_ok.addEventListener("click", uploadSingleFTPFilePopup, false);

    // upload multiple files from FTP
    btn_pop_upload_multiple_ftp_files_ok.addEventListener("click", uploadMultipleFTPFilesPopup, false);

    // upload multiple files from FTP
    btn_pop_upload_single_ftp_folder_ok.addEventListener("click", uploadSingleFTPFolderPopup, false);

    // upload multiple folders from FTP
    btn_pop_upload_multiple_ftp_folders_ok.addEventListener("click", uploadMultipleFTPFoldersPopup, false);

    // delete FTP files
    btn_pop_delete_ftp_files_ok.addEventListener("click", deleteFTPFilesPopup, false);

    // rename FTP files
    btn_pop_rename_ftp_file_ok.addEventListener("click", renameFTPFilesPopup, false);

    // delete FTP directory
    btn_pop_delete_ftp_directory_ok.addEventListener("click", renameFTPFilesPopup, false);

    // invoke FTP directory
    btn_pop_invoke_ftp_ok.addEventListener("click", invokeFTPDirectoryPopup, false);

    // create new file
    btn_pop_create_new_file_ok.addEventListener("click", createNewFilePopup, false);

    // copy files
    btn_pop_copy_files_ok.addEventListener("click", copyFilesPopup, false);

    // move files
    btn_pop_move_files_ok.addEventListener("click", moveFilesPopup, false);

    // Rename files
    btn_pop_rename_files_ok.addEventListener("click", renameFilesPopup, false);

    // Delete file
    btn_pop_delete_file_ok.addEventListener("click", deleteFilePopup, false);

    // Delete temporary files
    btn_pop_delete_temporary_files_ok.addEventListener("click", deleteTemporaryFilesPopup, false);

    // Create files shortcut
    btn_pop_create_file_shortcut_ok.addEventListener("click", createFilesShortcutPopup, false);

    // Get files part
    btn_pop_get_file_part_ok.addEventListener("click", getFilesPartPopup, false);

    // Print file
    btn_pop_print_file_ok.addEventListener("click", printFilePopup, false);

    // Print multiple files
    btn_pop_print_files_ok.addEventListener("click", printMultipleFilesPopup, false);

    // Open folder
    btn_pop_open_folder_ok.addEventListener("click", openFolderPopup, false);

    // Create folder
    btn_pop_create_folder_ok.addEventListener("click", createFolderPopup, false);

    // Copy folder
    btn_pop_copy_folder_ok.addEventListener("click", copyFolderPopup, false);

    // Move folder
    btn_pop_move_folder_ok.addEventListener("click", moveFolderPopup, false);

    // Create shortcut
    btn_pop_create_shortcut_ok.addEventListener("click", createShortcutPopup, false);

	// Extract Image
	btn_extract_image_ok.addEventListener("click", extractImagePopup, false);

	// Extract Image Response
	btn_extract_image_response_save.addEventListener("click", extractImageResponsePopup, false);
	
	// Record Web
	btn_record_web_record.addEventListener("click", recordWebRecordPopup, false);
	btn_record_web_stop.addEventListener("click", recordWebStopPopup, false);

    // Create_PDF
	btn_pop_create_pdf_ok.addEventListener("click", createPdfPopup, false);

	// Split PDF
	btn_split_pdf_ok.addEventListener("click", splitPdfPopup, false);

    // Concatenate PDF
	btn_pop_concatenate_pdf_ok.addEventListener("click", concatenatePdfPopup, false);

    // Insert new page
	btn_pop_insert_newpage_pdf_ok.addEventListener("click", insertNewPagePdfPopup, false);

	// Insert existing page
	btn_pop_insert_existingpage_pdf_ok.addEventListener("click", insertExistingPagePdfPopup, false);

	// Encrypt PDF
	pop_encrypt_pdf_ok.addEventListener("click", encryptPdfPopup, false);

	// Decrypt PDF
	btn_pop_decrypt_pdf_ok.addEventListener("click", decryptPdfPopup, false);

	// Extract image from PDF
	btn_pop_extract_image_pdf_ok.addEventListener("click", extractImagePdfPopup, false);

	// Extract text from PDF
	btn_pop_extract_text_pdf_ok.addEventListener("click", extractTextPdfPopup, false);

	// Extract text from PDF using OCR
	btn_pop_extract_text_ocr_pdf_ok.addEventListener("click", extractTextPdfOCRPopup, false);

	// Extract page from PDF
	btn_pop_extract_page_pdf_ok.addEventListener("click", extractPagePdfPopup, false);

    // Convert any file to PDF
	btn_pop_any_to_pdf_ok.addEventListener("click", anyFileToPdfPopup, false);

    // Convert word file to PDF
	btn_pop_word_to_pdf_ok.addEventListener("click", wordToPdfPopup, false);

	// Convert excel file to PDF
	btn_pop_excel_to_pdf_ok.addEventListener("click", excelToPdfPopup, false);

	// Convert GIF file to PDF
	btn_pop_gif_to_pdf_ok.addEventListener("click", gifToPdfPopup, false);

	// Convert PDF file to word
	btn_pop_pdf_to_word_ok.addEventListener("click", pdfToWordPopup, false);

	// Convert PDF file to excel
	btn_pop_pdf_to_excel_ok.addEventListener("click", pdfToExcelPopup, false);

	// CureBay Web Automation
	btn_curebay_webautomation_ok.addEventListener("click", curebayWebautomationPopup, false);

    // Extract data from webpage
    btn_pop_extract_data_from_webpage_ok.addEventListener("click", extractDataWebpagePopup, false);

    // Take screenshot of webpage
    btn_pop_take_screenshot_of_webpage_ok.addEventListener("click", takeScreenshotWebpagePopup, false);



	for (i = 0; i < click_task.length; i++) {
		click_task[i].addEventListener("click", click_task_func, false);
	}
	
});


function optiic_extract(response_text_element,url_path){
	let optiic = new Optiic({
    apiKey: '8XZdk8qS4ZwB4TWRvHSi1GNKsEGsMynHwaGac3KrbcQ7' // Not required, but having one removes limits (get your key at https://optiic.dev).
  });
  try {
    optiic
      .process({
        mode: "ocr",
        // url: "https://image.freepik.com/free-vector/illustration-application-form_53876-18193.jpg",
        url: url_path,
      })
      .then((result) => response_text_element.textContent = result['text']);
  } catch (err) {
    console.error(err.message);
  }
}

function closeForm(){
	modal.style.display = "none"
}
// POPUP'S TAB FUNCTION
function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	var showDiv = [...document.getElementsByClassName(cityName)];

	showDiv.forEach((div) => {
		console.log("Click Click");
		div.style.display = "block";
		div.style.overflow = "auto";
	});

	evt.currentTarget.className += " active";
}

// POPUP Close_Button
var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn){
  btn.onclick = function() {
	var modal = btn.closest('.modal');
	modal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target.className === "modal") {
	event.target.style.display = "none";
  }
}

// NODES MENU DROPDOWN
let dropdownBtn = document.getElementsByClassName("dropdown-btn");
for(let i = 0;i < dropdownBtn.length;i++){
dropdownBtn[i].addEventListener("click",(e)=>{
	// alert("click");
  dropdownBtn[i].classList.toggle("showDrop");
});
}

$(document).ready(function() {
	var $myFrom = $('#create_node');
	$myFrom.submit(function(event) { // catch the form's submit event
		event.preventDefault()
		var $fromData = $myFrom.serialize();
		var $thisURL = $myFrom.attr('data-url');
		$.ajax({ // create an AJAX call...
			method : 'POST',
			url : $thisURL,
			data : $fromData,
			success: function(data) {
				alert(data);
				$('#create_node').hide()
			}
			});
	});
});

function getfolder(e) {
	var files = e.target.files;
	var path = files[0].webkitRelativePath;
	var Folder = path.split("/");
	outputfile.type = 'text';
	outputfile.value = Folder[0];
	e.currentTarget.type='hidden'

	// alert(Folder[0]);
	// $('#flup').hide()
  }

// import export_test from '/export_text.js'



